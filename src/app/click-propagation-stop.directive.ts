import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickPropagationStop]',
})
export class ClickPropagationStopDirective {
  constructor() {}
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
