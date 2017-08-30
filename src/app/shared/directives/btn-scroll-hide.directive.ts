import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[btnScrollHide]',
})

export class BtnScrollHideDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style = 'display: none';
  }

  @HostListener('click')
  public clickBtnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window: scroll')
  public winScrollBtnToggle () {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset ||  document.body.scrollTop || 0;
    if (scrollTop + document.body.clientHeight >= document.body.offsetHeight + 150) {
      this.element.nativeElement.style = 'display: block';
    }
    else {
      this.element.nativeElement.style = 'display: none';
    }
  }
}
