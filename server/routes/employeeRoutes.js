const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all employees
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        employee_id,
        first_name,
        last_name,
        email,
        phone,
        position,
        department,
        status,
        created_at
      FROM employees
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching employees:", error);

    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
});

module.exports = router;