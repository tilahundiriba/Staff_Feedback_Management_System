const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all services
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        service_id,
        service_name,
        department,
        description,
        status,
        created_at
      FROM services
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching services:", error);

    res.status(500).json({
      message: "Failed to fetch services",
    });
  }
});

module.exports = router;