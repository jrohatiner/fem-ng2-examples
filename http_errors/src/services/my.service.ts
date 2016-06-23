import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';


export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: Http) {}

  getItems() {
    return this.http.get('fileDoesNotExist.json')
      .map(result => result.json())
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.statusText || 'Server error');
  }
}
