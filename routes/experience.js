const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/experience');
router.post("/experience",create);
router.patch("/experience/:_id",update);
router.delete("/experience/:_id",remove);
module.exports = router;
