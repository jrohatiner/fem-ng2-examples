import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dominator]'
})

export class DominatorDirective {
  @Input() set dominator(count: Number) {
    this._viewContainer.clear();
    
    for (let i = 0; i < count; i++) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }
  
  constructor(
    private _templateRef: TemplateRef,
    private _viewContainer: ViewContainerRef
  ) {}
}