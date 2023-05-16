const Todo = require('../models/todo');

module.exports = {
  index
};

function index(req, res) {
  // Do not use a leading slash
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}