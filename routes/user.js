const router = require("express").Router();
const {
    create,
    update,
    remove,
    login,
    userInfo
} = require('../controllers/user');
router.post('/user',create)
router.patch('/user/:_id',update)
router.delete('/user/:_id',remove)
router.get('/login',login);
router.get('/user',userInfo)
module.exports = router;