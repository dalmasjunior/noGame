const Router = require('express').Router;
const router = new Router();

const user = require('./users');

router.route('/')
    .post((...args) => user.create(...args))
    .get((...args) => user.find(...args))

module.exports = router;