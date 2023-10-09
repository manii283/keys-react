import logo from './logo.svg';
import './App.css';

function App() {
  const IPL = ['CSK', 'MI', 'RCB', 'CSK'];

  const result = IPL.map((ipl, index)=><h1>{ipl} index is {index}</h1>)
  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}

export default App;
