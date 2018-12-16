import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estetic Room :) ';

  @ViewChild(MessagesComponent) messages: MessagesComponent;

  onPosted(message: any) {
    this.messages.messages.push(message);
  }
}
