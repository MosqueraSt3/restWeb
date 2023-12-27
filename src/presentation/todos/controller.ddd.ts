import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";

export class TodoController {

    // * DI
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    /**
     * getTodos
     */
    public getTodos = async (req: Request, res: Response) => {
        const todos = await this.todoRepository.getAll();
        return res.json(todos);
    }

    /**
     * getTodoById
     */
    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const todo = await this.todoRepository.findById(id);
            return res.json(todo);
        } catch (error) {
            res.status(400).json({ error, message: 'todos-controller.ts' })
        }
    }

    /**
     * createTodo
     */
    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const newTodo = await this.todoRepository.create(createTodoDto!);
        return res.json(newTodo);
    }

    /**
     * updateTodo
     */
    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({...req.body, id});
        if (error) return res.status(400).json({ error });

        const updatedTodo = await this.todoRepository.updateById(updateTodoDto!);

        return res.json(updatedTodo);
    }

    /**
     * deleteTodo
     */
    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedTodo = await this.todoRepository.deleteById(id);

        return res.json(deletedTodo);
    }
}