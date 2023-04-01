const router = require("express").Router();
const {
    create,
    read,
    update,
    remove
} = require('../controllers/project');
router.post("/project",create);
router.get("/project/:_id",read)
router.patch("/project/:_id",update);
router.delete("/project/:_id",remove);
module.exports = router;