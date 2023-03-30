const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/course');

router.post("/course",create);
router.patch("/course",update);
router.delete("/course",remove);
module.exports = router;
