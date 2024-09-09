import { useTodo } from "../hooks/useTodo"

const Title = () => {

    const { pendingTodos } = useTodo();

    return (
        <h1>
            Todos: {pendingTodos}
        </h1>
    )
}

export default Title