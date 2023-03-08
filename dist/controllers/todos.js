"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'TODOを作成しました。', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
    // res.json({todos:TODOS});
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, text);
    res.json({ message: "更新しました。", updateTodos: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
const deleteTodos = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "削除しました。", deleteTodos: TODOS[todoIndex] });
};
exports.deleteTodos = deleteTodos;
