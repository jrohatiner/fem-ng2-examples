import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'code-tabs',
  templateUrl: 'src/code/code.html',
  directives: [Highlight]
})

export class Code {}
