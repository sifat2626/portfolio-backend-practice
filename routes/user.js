const router = require("express").Router();
const {
    createUser,
    login,
    userInfo
} = require('../controllers/user');
router.post('/createUser',createUser)
router.get('/login',login);
router.get('/user',userInfo)
module.exports = router;