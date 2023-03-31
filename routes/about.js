const router = require("express").Router();
const {
    create,
    update
} = require('../controllers/about')
const {remove} = require("../controllers/experience");

router.post("/about",create);
router.patch("/about/:_id",update);
router.delete("/about/:_id",remove);
module.exports = router;