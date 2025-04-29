const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// GET home page with email form
router.get('/', emailController.getEmailForm);

// POST to send email
router.post('/send', emailController.sendEmail);

module.exports = router; 