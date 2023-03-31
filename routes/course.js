const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/course');

router.post("/course",create);
router.patch("/course/:_id",update);
router.delete("/course/:_id",remove);
module.exports = router;
