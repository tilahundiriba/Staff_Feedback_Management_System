const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all customers
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        customer_id,
        email,
        customer_type,
        age_category,
        gender,
        created_at
      FROM customers
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching customers:", error);

    res.status(500).json({
      message: "Failed to fetch customers",
    });
  }
});

module.exports = router;