const Router = require('express').Router;
const router = new Router();

const path = require('path');


const users = require('./users/user-router');

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
router.use('/users', users);

module.exports = router;