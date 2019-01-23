import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import 'rxjs';

@Injectable()
export class ApiService {

  // BASE_URL = 'https://service-estetic-room.azurewebsites.net/api/';
  BASE_URL = 'https://localhost:44362/api/';

  constructor(private http: HttpClient, private sb: MatSnackBar) {}
  async getMessages() {
    try {
        return this.http.get(this.BASE_URL + '/messages').toPromise();
    } catch (error) {
      this.handleError('Unable to get messsage');
    }
  }

  async postMessage(message) {
    try {
      return this.http.post(this.BASE_URL + '/messages', message).toPromise();
    } catch (error) {
      this.handleError('Unable to post messsage');
    }
  }

  private handleError(error) {
    console.error(error);
    this.sb.open(error);
  }
}
