const router = require("express").Router();
const {
    create,
    login,
    userInfo
} = require('../controllers/user');
router.post('/user',create)
router.get('/login',login);
router.get('/user',userInfo)
module.exports = router;