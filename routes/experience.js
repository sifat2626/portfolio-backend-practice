const router = require("express").Router();
const {
    create,
    read,
    update,
    remove
} = require('../controllers/experience');
router.post("/experience",create);
router.get("/experience/:_id",read)
router.patch("/experience/:_id",update);
router.delete("/experience/:_id",remove);
module.exports = router;
