const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos"

// GET /todos (index functionality)
router.get('/', todosCtrl.index);

module.exports = router;
