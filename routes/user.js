const router = require("express").Router();
const {
    login,
    userInfo
} = require('../controllers/user');
router.get('/login',login);
router.get('/user',userInfo)
module.exports = router;