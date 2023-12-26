import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy milk', completedAt: new Date() },
    { id: 2, text: 'Buy bread', completedAt: null },
    { id: 3, text: 'Buy eggs', completedAt: new Date() },
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
        if (isNaN(id)) return res.status(400).json({ error: `ID must be a number` });
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(404).json({ error: `Todo with ${id} not found` });
        return res.json(todo);
    }

    /**
     * createTodo
     */
    public createTodo = (req: Request, res: Response) => {
        const { text } = req.body;
        if (!text) return res.status(400).json({ error: 'Text is required' });
        const newTodo = {
            id: todos.length + 1,
            text,
            completedAt: null,
        };
        todos.push(newTodo);
        return res.json(newTodo);
    }

    /**
     * updateTodo
     */
    public updateTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `ID must be a number` });
        
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(404).json({ error: `Todo with ${id} not found` });

        const { text, completedAt } = req.body;
        
        todo.text = text || todo.text;
        (completedAt === 'null')
            ? todo.completedAt = null
            : todo.completedAt = new Date(completedAt || todo.completedAt)

        return res.json(todo);
    }
}