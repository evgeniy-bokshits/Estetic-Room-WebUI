import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPosted = new EventEmitter();

  constructor(private webService: WebService ) { }

  message = {
    owner: '',
    text: ''
  };

  ngOnInit() {
  }

  post() {
    this.webService.postMessage(this.message);
    this.onPosted.emit(this.message.toString());
  }
}
