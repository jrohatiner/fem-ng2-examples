import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class Highlight implements OnInit {
  constructor(private _element: ElementRef) {}

  ngOnInit() {
    hljs.highlightBlock(this._element.nativeElement.querySelector('code'))
  }
}
