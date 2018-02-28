const Router = require('express').Router;
const router = new Router();

const users = require('./users/user-router');

router.use('/users', users);

module.exports = router;