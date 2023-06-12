import React, { Component } from "react";
import TodoList from "../Components/TodoList";
class Tasks extends React.Component {
    render() {
        return (
            <div className="m-0 p-0">
            <div
                className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center scroll-auto">
                <TodoList />
            </div>
        </div>
        );
    }
}

export default Tasks;