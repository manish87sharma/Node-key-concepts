var express = require('express');
var app = express();
const { PerformanceObserver, performance } = require('perf_hooks');

function blockLoop() {
    let sum = 0;
    var t0 = performance.now();
    for (let index = 0; index < 9999999999; index++) {
        // blocking the code;      
        sum = sum + index;
    }
    var t1 = performance.now();

    return t1 - t0;
}
app.get("/BlockingCode", (req, res) => {
    console.log("starting processing of /BlockingCode request", Date.now());
    let timeTaken = blockLoop();

    res.status(200).send(`This is blocking code and time taken to compute is ${timeTaken}`);
    console.log("finishing processing of /BlockingCode request", Date.now());
})

app.get("/NonBlockingCode", (req, res) => {

    console.log("starting processing of /NonBlockingCode request", Date.now());
    res.status(200).send("This is non Blocking endpoint");
    console.log("finishing processing of /NonBlockingCode request", Date.now());
})

app.listen(3000, () => {
    console.log("Application running on port 3000");
})