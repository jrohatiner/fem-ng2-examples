import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

export interface Item {
  name: String, description: String
}

@Injectable()
export class MyService {
  constructor(private _http: Http) {}
  
  getItems() {
    return this._http.get('fileDoesNotExist.json')
      .map(result => result.json())
      .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}