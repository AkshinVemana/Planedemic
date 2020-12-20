import * as React from 'react';
import {useState, useEffect} from 'react';


const Route = ({route}) =>{

    const cost = route.get[route.length - 1];
    var path = []
    for(var i = 0; i <route.length - 2; i ++){
        path.push(route.get[i]);
    }
    
    return(
        <div>
            <div>This is the cost of this route: {cost}</div>
            <div>This is the path of this route: {path}</div>
        </div>
    );
}
export default Route;