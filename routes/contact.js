const router = require("express").Router();
const {
    createOrUpdate
} = require('../controllers/contact')

router.post('/contact',createOrUpdate)
module.exports = router;