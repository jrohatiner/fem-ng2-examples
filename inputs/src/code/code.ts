import { Component, ViewEncapsulation } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { Highlight } from './highlight';

@Component({
  selector: 'code-tabs',
  templateUrl: 'src/code/code.html',
  directives: [MATERIAL_DIRECTIVES, MD_TABS_DIRECTIVES, Highlight],
  styles: [`
    md-tab-group-canvas {
      overflow-x: scroll;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class Code {}