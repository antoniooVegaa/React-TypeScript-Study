//Para UseState
import { Counter } from "./Components/Counter";
import Usuario from "./Components/Usuario";

//Para UseEfect
import TimerPadre from "./Components/TimerPadre";

//Para useReducer
import CounterReducer from "./Components/CounterReducer";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>UseState</h2>
      <Counter />
      <Usuario />

      <h2>UseEffect-UseRef</h2>
      <hr/>
      <TimerPadre />

      <h2>UseReducer</h2>
      <hr/>
      <CounterReducer/>


    </>
  );
}

export default App;
