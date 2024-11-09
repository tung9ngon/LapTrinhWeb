const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoControllers');

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);


module.exports = router;