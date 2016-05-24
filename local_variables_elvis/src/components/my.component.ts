import { Component } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-component',
  template: `
    <p *ngFor="let name of names">{{name}}</p>

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
