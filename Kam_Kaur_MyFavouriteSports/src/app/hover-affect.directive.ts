import { EmptyExpr } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
 @Input('hoverAffect') hoverAffect: string="";
  styleType: string | undefined;
  // renderer: any;
  // originalBorder: any;

 
   
  constructor(public el:ElementRef) { 
    
  }
  
   @HostListener('mouseenter') onMouseEnter(){
    debugger
     if (this.hoverAffect === 'underline') {
       this.el.nativeElement.style.textDecoration = 'underline';
     } else if (this.hoverAffect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
 } 
 
 
     @HostListener('mouseleave') onmouseleave(){
     if (this.hoverAffect === 'underline') {
        this.el.nativeElement.style.textDecoration = 'none';
      } else if (this.hoverAffect === 'bold') {
         this.el.nativeElement.style.fontWeight = 'normal';
     }
      
   }

}
