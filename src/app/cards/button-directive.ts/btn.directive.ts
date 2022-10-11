
import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({selector: '[counting]'})
export class CountClicks {
  numberOfClicks = 0;

  constructor(private element: ElementRef,private renderer: Renderer2){}

  @HostBinding('style.backgroundColor') bgColor = 'transparent';
  @HostListener('mouseenter', ['$event.target'])
  onEnter(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    // this.element.nativeElement.style.background = 'cyan';
    // this.renderer.setStyle(this.element.nativeElement,'background','red')
    this.bgColor = 'green'
  }
  @HostListener('mouseleave', ['$event.target'])
  onLeave(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    // this.element.nativeElement.style.background = 'transparent'
    // this.renderer.setStyle(this.element.nativeElement,'background','yellow')
    this.bgColor = 'yellow'
  }
}