import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'another-component',
  template: `<h1>another component with query params: {{params | json}}</h1>`
})

export class AnotherComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }
}
