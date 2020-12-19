import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const FindPath = (data) => {
  // run backend processes on start and dest airports
  console.log(data.start);
  console.log(data.dest);
};

function App() {
  // handles getting the information from the client
  const { register, handleSubmit } = useForm();
  return (
    <div className="App">
      <header className="App-header">
        Planedemic
      </header>
      <div>
        <form onSubmit={handleSubmit(FindPath)}>
          <input name="start" placeholder="Start" ref={register} />
          <input name="dest" placeholder="Destination" ref={register} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
