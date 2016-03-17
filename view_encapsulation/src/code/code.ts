import { Component, ViewEncapsulation } from 'angular2/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';
import { Highlight } from './highlight';

@Component({
  selector: 'code-tabs',
  templateUrl: 'src/code/code.html',
  directives: [MATERIAL_DIRECTIVES, Highlight]
})

export class Code {}