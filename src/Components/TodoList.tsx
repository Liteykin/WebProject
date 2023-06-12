import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput("");
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
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
                  className={`flex-grow cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
              >
                {todo.text}
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
