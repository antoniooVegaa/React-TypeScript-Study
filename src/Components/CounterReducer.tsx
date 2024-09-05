import { useReducer } from "react";

const initialState = {
    contador: 0
}

type actionType =
    | { type: 'Incrementar' }
    | { type: 'Decrementar' }
    | { type: 'Establecer', paylod: number};

const contadorReducer = (state: typeof initialState, action: actionType) => {
    switch (action.type) {
        case 'Incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'Decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'Establecer':
            return {
                ...state,
                contador: action.paylod
            }

        default:
            return state;
    }
    return state;
}

const CounterReducer = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)


    return (
        <>
            <h2>
                Contador: {
                    contadorState.contador
                }
            </h2>
            <button className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'Incrementar' })}>
                +1
            </button>

            <button className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'Decrementar' })}>
                -1
            </button>

            <button className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'Establecer', paylod: 100})}>
                100
            </button>

        </>
    )
}

export default CounterReducer