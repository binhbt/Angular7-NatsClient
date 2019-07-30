import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {connect, NatsConnectionOptions, Payload} from 'ts-nats';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('xxx');


function add() {
console.log('add ssdfds dfddf ');
}
/*
async function test1() {
  console.log('1???');
	try {
	    let nc = await connect({servers: ['nats://iGGcNcMx8c5nJjxtsr9KSQhte7hA5LN1@178.128.212.211:24222']});
	let sub = await nc.subscribe('msg', (err, msg) => {
	    if(err) {
	    } else {
		console.log(msg);
	    }
	});
	} catch(ex) {
		    console.log(ex);
	}

}
*/
async function test2() {
  console.log('1???');
	try {
    var nats = require('websocket-nats').connect('ws://178.128.212.211:4223');

    // Simple Publisher
    //nats.publish('msg', 'Hello World!');

    // Simple Subscriber
    nats.subscribe('msg', function(msg) {
      console.log('Received a message: ' + msg);
    });

	} catch(ex) {
		    console.log(ex);
	}

}
add();
test2();
