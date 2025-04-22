const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new company
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Additional CRUD routes...

module.exports = router;