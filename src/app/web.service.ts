import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class WebService {

  BASE_URL = 'https://service-estetic-room.azurewebsites.net/api/';

  constructor(private http: HttpClient) {}
  getMessages() {
    return this.http.get(this.BASE_URL + '/messages').toPromise();
  }

  postMessage(message) {
    return this.http.post(this.BASE_URL + '/messages', message).toPromise();
  }
}
