import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from './message';
import { MessagesService } from './messages.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  providers: 	[MessagesService],
})

export class ChatComponent {

	constructor(private messagesService: MessagesService, private router: Router) { 
		  this.messagesService.getMessagesAPI().then(list => this.messages = list);

	}

	@ViewChild('ChatMessage') textarea;
	@ViewChild('chatScroller') chatScroller;

  	btntext = 'THROW';
  	messages: Message[];

  	onMessageSend(e): void {
  		let message = this.textarea.nativeElement.value.trim();
  		if(message.length > 0) {
  			this.chatScroller.nativeElement.scrollTop = 0;
  			this.textarea.nativeElement.value = '';
  			this.messagesService.addMessage(message).then(list => this.messages = list);
  		}
  	}

  	selectedMessage: Message[];

	showMessage(message): void {
		this.selectedMessage = message;
	}  	

	viewDetails(id): void {
		this.router.navigate(['/chat', id]);
	}

}