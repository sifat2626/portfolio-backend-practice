const router = require("express").Router();
const {
    create,
    read,
    update,
    remove
} = require('../controllers/course');

router.post("/course",create);
router.get("/course/:_id",read)
router.patch("/course/:_id",update);
router.delete("/course/:_id",remove);
module.exports = router;
