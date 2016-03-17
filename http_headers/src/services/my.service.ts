import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import 'rxjs/Rx';

const HEADER = { headers: new Headers({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: String, description: String
}

@Injectable()
export class MyService {
  constructor(private _http: Http) {}
  
  getItems() {
    return this._http.get('data/items.json', HEADER)
      .map(items => items.json());
  }
}