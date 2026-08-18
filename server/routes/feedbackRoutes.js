const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        f.feedback_id,

        e.employee_id,
        CONCAT(e.first_name, ' ', e.last_name) AS employee_name,

        s.service_name,

        COUNT(fr.rating) AS total_categories,

        ROUND(
          COALESCE(AVG(fr.rating), 0)::numeric,
          2
        ) AS overall_rating,

        f.comment,
        f.created_at

      FROM feedback f

      JOIN employees e
        ON f.employee_id = e.employee_id

      LEFT JOIN services s
        ON f.service_id = s.service_id

      LEFT JOIN feedback_ratings fr
        ON f.feedback_id = fr.feedback_id

      GROUP BY
        f.feedback_id,
        e.employee_id,
        e.first_name,
        e.last_name,
        s.service_name,
        f.comment,
        f.created_at

      ORDER BY f.created_at DESC
    `);

    res.json(result.rows);

  } catch (error) {
    console.error("Error fetching feedback:", error);

    res.status(500).json({
      message: "Failed to fetch feedback",
      error: error.message
    });
  }
});
module.exports = router;