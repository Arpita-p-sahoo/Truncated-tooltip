import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTruncatedTextTooltip]'
})
export class TruncatedTextTooltipDirective implements OnInit {
  constructor(private el: ElementRef, private ngbTooltip:NgbTooltip) {}

  ngOnInit(): void {
    setTimeout(() => {
      const isTextTruncated = this.isTextTruncated(this.el.nativeElement);
      if (isTextTruncated) {
        this.ngbTooltip.open();
        this.ngbTooltip.ngbTooltip = this.el.nativeElement.innerText;
      }
    });
  }

  private isTextTruncated(element: HTMLElement): boolean {
    return element.offsetWidth < element.scrollWidth;
  }
}
