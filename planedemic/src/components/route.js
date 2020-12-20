import * as React from 'react';


const Route = ({route}) =>{
    var path = route.split(',')
    path[0] = path[0].substring(3, 6)
    path[0] += " -> "
    for(var i = 1; i < path.length - 1; i++) {
        path[i] = path[i].trim();
        path[i] = path[i].substring(1, 4)
        if(i !== path.length - 2)
            path[i] += " -> "
    }
    const cost = path.pop();
    let color;
    if(cost >= 1000) {
        color = 'red'
    } else if (cost >= 750) {
        color = 'orange'
    } else if (cost >= 500) {
        color = '#ffd700'
    } else {
        color = 'green'
    }
    return(
        <div>
            <div style={{color:color}}>{path} </div>
        </div>
    );
}
export default Route;