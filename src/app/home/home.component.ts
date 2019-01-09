import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Title :) 2';
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  onPosted(message: any) {
    this.messages.messages.push(message);
  }
}
