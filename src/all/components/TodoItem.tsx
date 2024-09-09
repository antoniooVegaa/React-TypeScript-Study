import { useContext } from "react"
import { Todo } from "../interfaces/interface"
import { TodoContext } from "../context/TodoContext"
import { useTodo } from "../hooks/useTodo"

interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {

    const {toggleTodo}=useTodo();

    return (
        <li style={{
            cursor: "pointer",
            textDecoration: todo.completed ? "line-through": ''
        }}
            onDoubleClick={()=> toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    )
}

export default TodoItem