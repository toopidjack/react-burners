// import Accordian from './components';
import JsonEditor from './components/JsonEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian />
      <hr /> */}
      <JsonEditor config="vrs" />
      <hr />
      <JsonEditor config="drainage" />
    </div>
  );
}

export default App;
