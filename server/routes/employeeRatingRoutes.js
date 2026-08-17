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

module.exports = router;