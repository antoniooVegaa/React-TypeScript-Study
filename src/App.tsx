//Para UseState
import { Counter } from "./Components/Counter";
import Usuario from "./Components/Usuario";

//Para UseEfect
import TimerPadre from "./Components/TimerPadre";

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
    </>
  );
}

export default App;
