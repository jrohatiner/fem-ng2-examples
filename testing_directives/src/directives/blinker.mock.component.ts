import { Component } from '@angular/core';
import { FemBlinkerDirective } from './blinker.directive';
@Component({ 
  selector: 'mock',
  template: `<h1 femBlinker>Blink for 10 seconds please!</h1>`,
  directives: [ FemBlinkerDirective ]
})
export class MockComponent {}