import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[resaltarTipoCuenta]'
})

export class resaltarTipoCuenta implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }

    @Input('resaltarTipoCuenta') plan: string = '';
    ngOnInit(){
        if(this.plan === 'premium'){
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold')
        }
    }
}