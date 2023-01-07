import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

export class InputFormatDirective {
  @Input('appInputFormat') format: any;
  constructor(private el: ElementRef) { }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'american' && this.el.nativeElement.value != '' && this.el.nativeElement.value.length == 10)
    {  
      let toReturn: string = '';
      toReturn +='(' + value.slice(0,3) + ')' + value.slice(3,6) + '-'+value.slice(6);
      this.el.nativeElement.value=toReturn;
    }
    
  }
  
}
