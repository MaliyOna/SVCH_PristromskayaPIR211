const Router = require('express');
const router = new Router();
const allController = require('../controllers/allController');
const {check} = require('express-validator');

const controller = new allController();

router.get('/', controller.getAll);
router.post('/',
[
    check('Brigade', "Brigade should be not empty").notEmpty(),
    check('Area', "Area should be not empty").notEmpty(),
    check('Schedule', "Schedule should be not empty").notEmpty(),
], controller.create);
router.put('/',
[
    check('Title', "Title should be not empty").notEmpty(),
    check('Area', "Area should be not empty").notEmpty(),
    check('Schedule', "Schedule should be not empty").notEmpty(),
], controller.update);
router.delete('/:id', controller.delete);

module.exports = router;