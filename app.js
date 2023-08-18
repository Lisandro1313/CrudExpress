const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Datos de ejemplo (simulando una base de datos)
const todos = [];

// Ruta para obtener todos los todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Ruta para crear un nuevo todo
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
});

// Ruta para actualizar un todo existente
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  todos[id] = updatedTodo;
  res.json(updatedTodo);
});

// Ruta para eliminar un todo
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const deletedTodo = todos.splice(id, 1);
  res.json(deletedTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
