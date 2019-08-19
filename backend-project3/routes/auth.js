const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {userSignupValidator} = require('../validators')

const router = express.Router();

// router.get('/', getPosts);
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

//routes by user ID
router.param("userId", userById);

module.exports = router;

