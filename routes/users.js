const express = require('express');
const router = express.Router();

const userController = require('../controllers/users')

router.get('/', userController.getAll);
router.get('/:id', userController.getSingle);

router.post('/', userController.createUser);
router.get('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;