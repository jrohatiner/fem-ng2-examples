import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class Highlight implements OnInit {
  constructor(private _element: ElementRef) {
  }

  ngOnInit() {
    hljs.highlightBlock(this._element.nativeElement.querySelector('code'));
    console.log('asdfasdf');
  }
}
