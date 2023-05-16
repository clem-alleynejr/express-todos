const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos"

// GET /todos (index functionality)
router.get('/', todosCtrl.index);
// GET /todos/:id (show functionality)
router.get('/:id', todosCtrl.show);

module.exports = router;
