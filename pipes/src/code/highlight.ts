import { Directive, ElementRef } from 'angular2/core';

@Directive({
  selector: '[highlight]'
})

export class Highlight {
  constructor(element: ElementRef) {
    hljs.highlightBlock(element.nativeElement.querySelector('code'))
  }
}