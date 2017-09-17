import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Message } from './message';
import { Messages } from './messages.data';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable() 

export class MessagesService {

	constructor(private _http: Http) {}

	/* with promise */
	getMessages(): Promise<Message[]> {
	  	return Promise.resolve(Messages);
	}

	getMessagesAPI(): Promise<Message[]> {
		return this._http.get('https://delight.travel/tours/apps/getMessages')
		.toPromise()
		.then(res => res.json())
		.catch(err => {console.log(err)});
	}

	// getMessagesAPI(): Promise<Message[]> {
	// 	let messages,
	// 		promise = new Promise((resolve, reject) => {
	// 		this._http.get('https://delight.travel/tours/apps/getMessages')
	// 		  .toPromise()
	// 		  .then(res => {
	// 		  	messages = res.json();
	// 		  	resolve();
	// 		  });
	// 	});
	// 	return promise;	             
	// }	
	 
	addMessage(message: any): Promise<Message[]> {
		var date = new Date().toLocaleString().replace(',', '');
        Messages.unshift({
        	id: Messages.length + 1,
        	user: {
        		name: 'Anonymous', 
        		age: '11', 
        		image: '/assets/anonymous-256.png'
        	}, 
        	text: message, 
        	created: date
    	});
		return Promise.resolve(Messages);
	}

	getMessage(id: number): Promise<Message> {
	  return this.getMessages().then(messages => Messages.find(message => message.id === id));
	}
}

