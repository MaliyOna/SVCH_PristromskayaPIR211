const Router = require('express');
const router = new Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')

const controller = new authController();

router.post('/registration',
[
    check('user', "user should be not empty").notEmpty(),
], controller.registration);

router.post('/login',
[
    check('user', "user should be not empty").notEmpty(),
], controller.login);

router.get('/:userName', controller.getRole);
router.put('/password', controller.updatePassword);
router.put('/restore-password', controller.restorePassword);
router.put('/', authMiddleware, controller.changeRole);

module.exports = router;