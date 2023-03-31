const router = require("express").Router();
const {
    create,
    update
} = require('../controllers/contact')
const {remove} = require("../controllers/experience");

router.post("/contact",create);
router.patch("/contact/:_id",update);
router.delete("/contact/:_id",remove);
module.exports = router;