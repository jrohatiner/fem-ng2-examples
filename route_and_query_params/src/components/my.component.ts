import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-component',
  template: `<h1>my-component with id: {{params.id}}</h1>`
})

export class MyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = Object.keys(params).length ? params : {id: 'N/A'};
    });
  }
}
