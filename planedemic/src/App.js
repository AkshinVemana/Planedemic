import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { sendData } from './API';






function App() {
  var [bestRoute, setBestRoute] = useState('');
  const FindPath = async (data) => {
    // run backend processes on start and dest airports
    setBestRoute('');
    const path = await sendData(data);
    setBestRoute(path);
  };
  
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
      {bestRoute ? <div>{bestRoute}</div> : null}
    </div>
  );
}

export default App;
