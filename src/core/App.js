import "./App.css";
import Interval from "../features/Interval";
import Avg from "../features/Avg";
import Sum from "../features/Sum";
import Draw from "../features/Draw";

function App() {
  return (
    <div className="App">
      <h1>Trying React-Redux</h1>

      <div className="row">
        <Interval></Interval>
      </div>

      <div className="row">
        <Avg></Avg>
        <Sum></Sum>
        <Draw></Draw>
      </div>
    </div>
  );
}

export default App;
