import { Component } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-component',
  template: `
    <p *ngFor="let name of names">{{name}}</p>

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
  directives: [ MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES ]
})

export class MyComponent {
  private names: Array<String> = ['John', 'Susy', 'Billy'];
}
