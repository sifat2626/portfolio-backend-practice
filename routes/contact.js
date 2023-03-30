const router = require("express").Router();
const {
    create,
    update
} = require('../controllers/contact')

router.post('/contact/create',create);
router.patch('/contact/update',update);
module.exports = router;