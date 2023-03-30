const router = require("express").Router();
const {
    create,
    update
} = require('../controllers/about')

router.post('/create',create);
router.patch('/update/:_id',update);
module.exports = router;