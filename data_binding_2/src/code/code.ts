import { Component, ViewEncapsulation } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'code-tabs',
  templateUrl: 'src/code/code.html',
  directives: [Highlight],
  styles: [`
    md-tab-group-canvas {
      overflow-x: scroll;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class Code {}