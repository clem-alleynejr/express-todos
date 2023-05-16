const Todo = require('../models/todo');

module.exports = {
  index,
  show
};

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id)
  });
}

function index(req, res) {
  // Do not use a leading slash
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}