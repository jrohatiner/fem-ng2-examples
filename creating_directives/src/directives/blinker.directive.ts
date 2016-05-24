import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[femBlinker]'
})

export class FemBlinker {
  constructor(private _element: ElementRef) {
    let interval = setInterval(() => {
      let color = _element.nativeElement.style.color;
      _element.nativeElement.style.color
        = (color === '' || color === 'black') ? 'red' : 'black';
    }, 300); 
    
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }
}