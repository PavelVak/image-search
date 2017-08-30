import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[infinityScroll]'
})
export class InfinityScrollDirective {
  @Output() public endOfPage: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('window: scroll')
  public scrollPage() {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;

    if(scrollTop + window.innerHeight + 100 >= document.body.scrollHeight) {
      this.endOfPage.emit();
    }
  }
}
