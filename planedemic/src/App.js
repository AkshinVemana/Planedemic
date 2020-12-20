import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { sendData } from './API';
import Route from './components/route'
import BestRoute from './components/bestRoute'




function App() {
  const [routes, setRoutes] = useState([]);
  const FindPath = async (data) => {
    // run backend processes on start and dest airports
    const path = await sendData(data)
    var augPath = " " + path
    parsePath(augPath)
  }
  const parsePath = (path) =>{
    setRoutes(path.split('],'))
    
  }
  // const getOtherPaths = () =>{
  //   for(var i = 0; i < routes.length - 1; i++) 
  //     <Route route={routes[i]}/>
  // }

  // function Paths() {
  //   // return ( <div className = 'pathsElement'>
  //   //   {(routes.length > 0 ? 
  //   //   (<div>
  //   //     <BestRoute route={routes[routes.length - 1]} />
  //   //     {getOtherPaths()}
  //   //   </div>) :
  //   //   null)}
  //   // </div>
  //   // )
  // }

  // handles getting the information from the client
  const { register, handleSubmit } = useForm();
  return (
    <div className="App">
      <header className="App-header">
        Planedemic
        <p>Find the safest flight route based on minimal risk of exposure to Covid-19</p>
      </header>
      <br/>
      <div>
        <form onSubmit={handleSubmit(FindPath)}>
          <input name="start" placeholder="Start" ref={register} />
          <input name="dest" placeholder="Destination" ref={register} />
          <input type="submit" />
        </form>
      </div>
      <br/>
      <br/>
        <div>
            <div>
              Color Key:
            </div>
            <div>
              Green: Low Covid Risk / Best Route
            </div>
            <div>
              Yellow: Moderate Covid Risk
            </div>
            <div>
              Orange: High Covid Risk
            </div>
            <div>
              Red: Extreme Covid Risk
            </div>
            <br/>
            
        </div>
        {
          routes
          .filter(route =>route.length > 6)
          .map(routes => {
            return(
              <Route route={routes}/>
            );
          })
        }
    </div>
  );
}

export default App;
