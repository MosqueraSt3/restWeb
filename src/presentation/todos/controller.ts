import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy milk', createdAt: new Date() },
    { id: 2, text: 'Buy bread', createdAt: new Date() },
    { id: 3, text: 'Buy eggs', createdAt: new Date() },
];

export class TodoController {
    
    // * DI
    constructor() {}

    /**
     * getTodos
     */
    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    }   

    /**
     * getTodoById
     */
    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) res.status(400).json({ error: `ID must be a number` });
        const todo = todos.find(todo => todo.id === id);
        if (!todo) res.status(404).json({ error: `Todo with ${id} not found` });
        return res.json(todo);
    }

    /**
     * createTodo
     */
    public createTodo = (req: Request, res: Response) => {
        const { text } = req.body;
        if (!text) res.status(400).json({ error: 'Text is required' });
        const newTodo = {
            id: todos.length + 1,
            text,
            createdAt: new Date(),
        };
        todos.push(newTodo);
        return res.json(newTodo);
    }
}