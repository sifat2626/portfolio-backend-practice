const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/project');
router.post('/create',create);
router.patch('/update',update);
router.delete('/delete',remove);
module.exports = router;