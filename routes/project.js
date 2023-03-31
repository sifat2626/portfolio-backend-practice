const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/project');
router.post("/project",create);
router.patch("/project/:_id",update);
router.delete("/project/:_id",remove);
module.exports = router;