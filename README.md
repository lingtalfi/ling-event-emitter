Ling event emitter (js)
=============
2020-04-08


A js tiny event emitter class.



Install
============

```js 
npm i ling-event-emitter
```


Usage
======



```js
const LingEventEmitter = require("ling-event-emitter");

class App extends LingEventEmitter{
    constructor(){
        super();
    }
    example(){
        var optionalArg1 = 1;
        var optionalArg2 = 2;
        var optionalArg3 = "etc...";
        this.dispatch("event_a", optionalArg1, optionalArg2);
    }
}

class Client { 
    constructor(app){
        app.on("event_a", (arg1, arg2) => {
            console.log("event_a: args received", arg1, arg2);
        });
    }

}

let app = new App();
let client = new Client(app);
app.example(); // event_a: args received 1 2


```


History log
=============

- 1.0.0 -- 2020-04-08 
    
    - initial commit

