import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAuthOnly]',
  standalone: true
})
export class AuthOnlyDirective {
  @Input() set appAuthOnly(condition: boolean) {
    if (condition) {
      this.vcr.createEmbeddedView(this.tpl);
    } else {
      this.vcr.clear();
    }
  }
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}
}
