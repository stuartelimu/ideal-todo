const express = require('express');
const router = express.Router();

// todo controller 
const todo_controller = require('../controllers/todoController');

router.get('/', todo_controller.todo_list);

router.get('/todos', todo_controller.todo_list);
router.get('/todo/:todoId', todo_controller.todo_detail);
router.post('/todo/create', todo_controller.todo_create);
router.put('/todo/:todoId', todo_controller.todo_update);
router.delete('/todo/:todoId', todo_controller.todo_delete);

module.exports = router;