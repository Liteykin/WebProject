import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
    id: number;
    userId: number;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get<Todo[]>("https://localhost:7001/api/Todo/GetAllTodos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const addTodo = async () => {
        if (input.trim() !== "") {
            const newTodo: Todo = {
                id: 0,
                userId: 0,
                title: input,
                description: "string",
                dueDate: "2023-06-13T09:43:58.712Z",
                isCompleted: true,
            };

            try {
                const response = await axios.post<Todo>("https://localhost:7001/api/Todo/AddTodo", newTodo);
                setTodos([...todos, response.data]);
                setInput("");
            } catch (error) {
                console.error("Error adding todo:", error);
            }
        }
    };

    const toggleTodo = async (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);

        try {
            await axios.put(`https://localhost:7001/api/Todo/UpdateTodo/${id}`, updatedTodos.find((todo) => todo.id === id));
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const removeTodo = async (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));

        try {
            await axios.delete(`https://localhost:7001/api/Todo/DeleteTodo/${id}`);
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-8">To-Do List</h1>
            <div className="flex w-full max-w-md mb-8">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-l px-4 py-2"
                    placeholder="Add a task..."
                />
                <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded-r">
                    Add Task
                </button>
            </div>
            <ul className="w-full max-w-md">
                {todos.map((todo) => (
                    <li key={todo.id} className="mb-4">
                        <div className="flex justify-between items-center border border-gray-300 rounded px-4 py-2">
              <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-grow cursor-pointer ${todo.isCompleted ? "line-through text-gray-500" : ""}`}
              >
                {todo.title}
              </span>
                            <button onClick={() => removeTodo(todo.id)} className="ml-4 bg-red-500 text-white rounded px-4 py-2">
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
