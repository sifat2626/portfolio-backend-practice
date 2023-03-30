const router = require("express").Router();
const {
    createOrUpdate
} = require('../controllers/intro');
router.post('/create',createOrUpdate)
module.exports = router;