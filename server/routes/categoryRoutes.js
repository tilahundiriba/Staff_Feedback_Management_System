const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        category_id,
        category_name,
        description,
        status,
        created_at
      FROM categories
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching categories:", error);

    res.status(500).json({
      message: "Failed to fetch categories",
    });
  }
});

module.exports = router;