const express = require("express");
const cors = require('cors');
const app = express();
const spawn  = require('child_process').spawn;

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
}))

app.post('/', async(req,res) => {
    const request = req;
    console.log('\n')
    console.log(request.body);
    const runScript = spawn('python3', ['assets/GraphGenerator.py', request.body.start, request.body.dest]);
    runScript.stdout.on('data',  (data) => {
        console.log("Python Boy...");
        console.log(data.toString());
    });
    // runScript.stderr.on('data', (data) => {
    //     console.error(data)
    // });
    runScript.on('close', () =>{
        console.log("Here");
    });
});

app.listen(5000, () => {
    console.log("Listening at http://localhost:5000");
});