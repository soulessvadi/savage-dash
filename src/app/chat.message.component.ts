import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Message } from './models/message';
import { MessagesService } from './services/messages.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'chat-message',
  templateUrl: './chat.message.component.html',
  providers:   [MessagesService],
})

export class ChatMessageComponent implements OnInit {
  constructor(
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}  

  @Input() message: Message;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.messageService.getMessage(+params.get('id')))
      .subscribe(res => this.message = res);
  }

  goBack(): void {
      this.location.back();
  }

}