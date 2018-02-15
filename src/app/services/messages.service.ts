import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Message } from './../models/message';
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
		.then(res => res.json() as Message[])
		.catch(err => {console.log(err)});
	}

	addMessage(message: any): Promise<Message[]> {
		return this._http.get('https://delight.travel/tours/apps/getMessages')
		.toPromise()
		.then(res => res.json())
		.catch(err => {console.log(err)});
	}

	getMessage(id: number): Promise<Message> {
	  return this.getMessages().then(messages => Messages.find(message => message.id === id));
	}
}

