const Router = require('express');
const router = new Router();
const allController = require('../controllers/allController');

const controller = new allController();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;