import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

export interface Item {
  name: String, description: String
}

@Injectable()
export class MyService {
  constructor(private _http: Http) {}
  
  getItems() {
    return this._http.get('data/items.json')
      .map(result => result.json())
      .toPromise();
  }
}