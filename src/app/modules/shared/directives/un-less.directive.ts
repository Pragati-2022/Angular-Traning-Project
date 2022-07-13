import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnLess]',
})
export class UnLessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appUnLess(condition : boolean){
    condition ? this.viewContainerRef.clear() : this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
