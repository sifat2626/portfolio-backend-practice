const router = require("express").Router();
const {
    create,
    read,
    update,
    remove
} = require('../controllers/about')


router.get("/about/:_id",read)
router.post("/about",create);
router.patch("/about/:_id",update);
router.delete("/about/:_id",remove);
module.exports = router;