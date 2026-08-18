const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Get overall rating for every employee
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        e.employee_id,
        e.first_name,
        e.last_name,

        COUNT(f.feedback_id) AS total_ratings,

        ROUND(
          COALESCE(AVG(f.rating), 0)::numeric,
          2
        ) AS overall_rating

      FROM employees e

      LEFT JOIN feedback f
        ON e.employee_id = f.employee_id

      GROUP BY
        e.employee_id,
        e.first_name,
        e.last_name

      ORDER BY overall_rating DESC
    `);

    res.json(result.rows);

  } catch (error) {
    console.error("Error fetching employee ratings:", error);

    res.status(500).json({
      message: "Failed to fetch employee ratings",
      error: error.message,
    });
  }
});
// GET ONE EMPLOYEE
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Employee ID requested:", id);

    // ==========================================
    // 1. GET EMPLOYEE OVERALL RATING
    // ==========================================

    const employeeResult = await pool.query(
      `
      SELECT
        e.employee_id,
        e.first_name,
        e.last_name,
        e.department,

        COUNT(DISTINCT f.feedback_id) AS total_feedbacks,

        COUNT(fr.rating) AS total_ratings,

        ROUND(
          COALESCE(AVG(fr.rating), 0)::numeric,
          2
        ) AS overall_rating

      FROM employees e

      LEFT JOIN feedback f
        ON e.employee_id = f.employee_id

      LEFT JOIN feedback_ratings fr
        ON f.feedback_id = fr.feedback_id

      WHERE e.employee_id = $1

      GROUP BY
        e.employee_id,
        e.first_name,
        e.last_name,
        e.department
      `,
      [id]
    );

    // Employee doesn't exist
    if (employeeResult.rows.length === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }


    // ==========================================
    // 2. GET RATING FOR EACH CATEGORY
    // ==========================================

    const categoryResult = await pool.query(
      `
      SELECT
        c.category_id,
        c.category_name,
        c.description,

        COUNT(fr.rating) AS total_ratings,

        ROUND(
          COALESCE(AVG(fr.rating), 0)::numeric,
          2
        ) AS average_rating

      FROM categories c

      LEFT JOIN feedback_ratings fr
        ON c.category_id = fr.category_id

      LEFT JOIN feedback f
        ON fr.feedback_id = f.feedback_id
        AND f.employee_id = $1

      GROUP BY
        c.category_id,
        c.category_name,
        c.description

      ORDER BY c.category_id
      `,
      [id]
    );


    // ==========================================
    // 3. SEND RESPONSE
    // ==========================================

    res.json({
      employee: employeeResult.rows[0],
      categories: categoryResult.rows,
    });

  } catch (error) {

    console.error(
      "Error fetching employee ratings:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch employee ratings",
      error: error.message,
    });
  }
});

module.exports = router;