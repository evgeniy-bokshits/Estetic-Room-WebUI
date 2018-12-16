import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any;

  constructor(private webService: WebService ) { }

  async ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let response = await this.webService.getMessages();

    this.messages = response;
  }

}
