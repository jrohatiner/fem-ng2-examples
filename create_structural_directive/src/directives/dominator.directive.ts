import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dominator]'
})

export class DominatorDirective {
  @Input() set dominator(count: number) {
    this.viewContainer.clear();

    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef,
    private viewContainer: ViewContainerRef
  ) {}
}
