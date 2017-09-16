import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Message } from './message';
import { Messages } from './messages.data';

import 'rxjs/add/operator/toPromise';

@Injectable() 

export class MessagesService {

	constructor(private http: Http) {}

	/* with promise */
	getMessages(): Promise<Message[]> {
	  	return Promise.resolve(Messages);
	}

	getMessagesAPI(): Promise<Message[]> {
		let messages;
		let promise = new Promise((resolve, reject) => {
			this.http.get('https://delight.travel/tours/apps/getMessages')
			  .toPromise()
			  .then(res => {
			  	messages = res.json();
			  	resolve();
			  });
		});
		return promise;	             
	}
	 
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}

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

