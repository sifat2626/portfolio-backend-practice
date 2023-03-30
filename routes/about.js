const router = require("express").Router();
const {
    createOrUpdate
} = require('../controllers/about')

router.post('/about',createOrUpdate)
module.exports = router;