import { Component } from 'angular2/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
  selector: 'my-component',
  template: `
    <p *ngFor="#name of names">{{name}}</p>
    
    <md-input-container>
      <label>Type to see the value</label>
      <input md-input type="text" #input />
    </md-input-container>
    
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
  directives: [ MATERIAL_DIRECTIVES ]
})

export class MyComponent {
  private names: Array<String> = ['John', 'Susy', 'Billy'];
}