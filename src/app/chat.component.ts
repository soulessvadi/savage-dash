import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from './models/message';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  providers: 	[MessagesService],
})

export class ChatComponent {

	constructor(private messagesService: MessagesService, private router: Router) { 
		  this.messagesService.getMessages().then(list => this.messages = list);

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
        this.messages.unshift({
          id: this.messages.length + 1,
          user: { 
            name: 'Anonymous', 
            age: '11', 
            image: '/assets/anonymous-256.png' 
          }, 
          text: message, 
          created: new Date().toLocaleString().replace(',', '')
        });
  			// this.messagesService.addMessage(message).then(list => this.messages = list);
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