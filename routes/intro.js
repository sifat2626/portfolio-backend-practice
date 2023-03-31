const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/intro');

router.post("/intro",create);
router.patch("/intro/:_id",update);
router.delete("/intro/:_id",remove);
module.exports = router;