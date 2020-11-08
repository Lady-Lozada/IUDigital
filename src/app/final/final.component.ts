import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input() mensajeDesdePadre: string;
  @Output() emisionEvento = new EventEmitter();

  public autor:string="Lady Lozada";
  public year:number=2020;
  public mostrar:boolean=true;


  constructor() { }

  ngOnInit(): void {

  }

  ocultaMuestraMsg(){
    this.mostrar = !this.mostrar;
    this.emisionEvento.emit({mostrar:this.mostrar});
  }

  ngOnChange(){
    console.log('cambio')
  }

}
