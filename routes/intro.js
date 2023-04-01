const router = require("express").Router();
const {
    create,
    read,
    update,
    remove
} = require('../controllers/intro');

router.post("/intro",create);
router.get("/intro/:_id",read)
router.patch("/intro/:_id",update);
router.delete("/intro/:_id",remove);
module.exports = router;