const router = require("express").Router();
const {
    create,
    update,
    remove
} = require('../controllers/experience');
router.post('/create',create);
router.patch('/update',update);
router.delete('/delete',remove);
module.exports = router;
