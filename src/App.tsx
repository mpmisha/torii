import { useState } from 'react';
import './App.css';
import { RunLogic } from "./Components/RunLogic";

function App() {
  const [result, setResult] = useState('ABCDEF');
  const onChange = (e: any) => {
    setResult(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>enter result here</div>
          <input type="text" value={result} onChange={onChange} minLength={6} maxLength={6} />
          <button onClick={() => { setResult('') }}>reset</button>
        </p>
        <p>
          <RunLogic answer={result} />
        </p>
      </header>
    </div>
  );
}

export default App;
