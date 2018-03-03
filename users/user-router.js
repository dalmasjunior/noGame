const Router = require('express').Router;
const router = new Router();

const user = require('./users');

router.route('/')
    .post((...args) => user.create(...args))

router.route('/login')
    .post((...args) => user.login(...args))

module.exports = router;