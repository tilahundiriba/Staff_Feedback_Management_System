const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all feedback
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        f.feedback_id,
        f.rating,
        f.comment,
        f.created_at,

        e.employee_id,
        e.first_name || ' ' || e.last_name AS employee_name,

        c.customer_id,

        s.service_id,
        s.service_name,

        cat.category_id,
        cat.category_name

      FROM feedback f

      JOIN employees e
        ON f.employee_id = e.employee_id

      LEFT JOIN customers c
        ON f.customer_id = c.customer_id

      LEFT JOIN services s
        ON f.service_id = s.service_id

      JOIN categories cat
        ON f.category_id = cat.category_id

      ORDER BY f.created_at DESC
    `);

    res.json(result.rows);

  } catch (error) {
    console.error("Error fetching feedback:", error);

    res.status(500).json({
      message: "Failed to fetch feedback",
      error: error.message,
    });
  }
});

module.exports = router;