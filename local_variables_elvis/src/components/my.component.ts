import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <md-input placeholder="Type to see the value" type="text" #input></md-input>

    <strong>{{input?.value}}</strong>
  `,
  styles: [`
    md-input-container:not(.md-input-invalid).md-input-focused .md-input {
      border-color: #2196F3
    }

    md-input-container:not(.md-input-invalid).md-input-focused label {
      color: #2196F3;
    }
  `]
})

export class MyComponent {}
