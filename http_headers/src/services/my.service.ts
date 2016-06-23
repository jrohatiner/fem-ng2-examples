import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const HEADER = { headers: new Headers({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: Http) {}

  getItems() {
    return this.http.get('data/items.json', HEADER)
      .map(items => items.json());
  }
}
