import React from 'react';
//import InputField from './components/InputField.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Planedemic
      </header>
      <div>
            <form styles={{
              width: 700,
              height: 700
            }}>
                <input placeholder="Start" style={{
                  width: 100,
                  height: 50
                }}/>
                <input placeholder="Destination"/>
                <button>Submit</button>
            </form>
      </div>
    </div>
  );
}
export default App;
