const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();



for (let index = 0; index < 11; index++) {
    console.log("index", index)
    myEmitter.on('event', () => {
        console.log("event captured")
    })
}

myEmitter.emit('event');
