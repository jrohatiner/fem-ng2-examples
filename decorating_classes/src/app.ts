import { Component } from 'angular2/core';
import { Code } from './code/code';

@Component({
  selector: 'app',
  template: `
    <code-tabs></code-tabs>
  `,
  directives: [Code]
})

export class App {}