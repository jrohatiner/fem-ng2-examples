import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: Http) {}

  getItems() {
    return this.http.get('data/items.json')
      .map(res => res.json());
  }
}
