const router = require("express").Router();
const {
    create,
    read,
    update,remove
} = require('../controllers/contact')


router.post("/contact",create);
router.get("/contact/:_id",read)
router.patch("/contact/:_id",update);
router.delete("/contact/:_id",remove);
module.exports = router;