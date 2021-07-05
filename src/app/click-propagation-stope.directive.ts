import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickPropagationStope]',
})
export class ClickPropagationStopeDirective {
  constructor() {}
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
