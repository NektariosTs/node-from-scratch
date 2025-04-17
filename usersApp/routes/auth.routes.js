const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/google/callback', authController.googleLogin);

module.exports = router

// https://accounts.google.com/o/oauth2/auth?client_id=947710428460-if7sjh0i0i5vn7fqvh5tvq3pacnck4gf.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline