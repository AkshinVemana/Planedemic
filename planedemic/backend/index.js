const express = require("express");
const cors = require('cors');
const app = express();
const spawn  = require('child_process').spawn;
const {PythonShell} = require('python-shell');

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
}))

// function run(){
//     const runScript = spawn('python', ['--version']);
//     //console.log(runScript);
//     runScript.stdout.on('data',  (data) => {
//         console.log("Python Boy...");
//     });
//     runScript.on('close', () =>{
//         console.log("Here");
//     });
// }
app.post('/', async(req,res) => {
    const request = req;
    console.log(request.body);
    console.log(request.body.start)
    const runScript = spawn('python', ['C:\Users\himan\Desktop\Programming\WinterHacklympics-2020\planedemic\backend\test.py',request.body.start, request.body.dest]);
    //console.log(runScript);pyth
    runScript.stdout.on('data',  (data) => {
        console.log("Python Boy...");
        console.log(data);
    });
    runScript.stderr.on('data', (data) => {
        console.error(data)
    });
    runScript.on('close', () =>{
        console.log("Here");
    });
    // (() =>{
    //     try{
    //         run();
    //     }catch(err){
    //         console.log(err);
    //     }
    // })();
    // let options ={
    //     start: request.body.start,
    //     dest: request.body.dest
    // }
    // PythonShell.run('test.py', function(err, result){
    //     if(err)
    //         throw err;
    //     console.log(result.toString());
    //     res.send(result.toString());
    // });
   
   
        
  
});

app.listen(5000, () => {

    console.log("Listening at http://localhost:5000");
});