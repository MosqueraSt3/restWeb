import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export class TodoController {

    // * DI
    constructor() { }

    /**
     * getTodos
     */
    public getTodos = async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany();
        return res.json(todos);
    }

    /**
     * getTodoById
     */
    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `ID must be a number` });

        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        if (!todo) return res.status(404).json({ error: `Todo with ${id} not found` });
        return res.json(todo);
    }

    /**
     * createTodo
     */
    public createTodo = async (req: Request, res: Response) => {
        const { text } = req.body;
        if (!text) return res.status(400).json({ error: 'Text is required' });

        const newTodo = await prisma.todo.create({
            data: { text }
        });

        return res.json(newTodo);
    }

    /**
     * updateTodo
     */
    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `ID must be a number` });

        const todo = await prisma.todo.findFirst({
            where: { id }
        });
        if (!todo) return res.status(404).json({ error: `Todo with ${id} not found` });

        const { text, completedAt } = req.body;
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: {
                text,
                completedAt: (completedAt) ? new Date(completedAt) : null
            }
        })

        return res.json(updatedTodo);
    }

    /**
     * deleteTodo
     */
    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `ID must be a number` });

        const todo = await prisma.todo.findFirst({
            where: { id }
        });
        if (!todo) return res.status(404).json({ error: `Todo with ${id} not found` });

        const deleted = await prisma.todo.delete({
            where: { id }
        })
        
        return res.json({ todo, deleted });
    }
}