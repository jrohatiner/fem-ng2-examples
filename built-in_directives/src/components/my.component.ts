import { Component, ViewEncapsulation } from 'angular2/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
  selector: 'my-component',
  template: `
    <div flex layout layout-align="center center" class="blinker-wrapper">
      <h1 [ngStyle]="{color: color, 'text-decoration': decoration}"
          *ngIf="showHeader">
        Big ol' header!
      </h1>
    </div>
  `,
  styles: [`
    .blinker-wrapper {
      min-height: 150px;
    }
  `]
  directives: [MATERIAL_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})

export class MyComponent {
  showHeader: Boolean = true;
  color: String = 'red';
  decoration: String = 'underline';
  
  constructor() {
    let counter = 0;
    
    let interval = setInterval(() => {
      this.showHeader = !this.showHeader;
      counter++;
      if (counter >= 10) {
        clearInterval(interval);
      }
    }, 500);
  }
}