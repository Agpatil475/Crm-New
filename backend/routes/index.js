const express = require('express');
const router = express.Router();
const contactRoutes = require('./contact.routes');
const companyRoutes = require('./company.routes');

router.use('/contacts', contactRoutes);
router.use('/companies', companyRoutes);

module.exports = router;