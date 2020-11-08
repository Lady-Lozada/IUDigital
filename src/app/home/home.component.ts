import { Component, OnInit } from '@angular/core';
import { Colaboradores } from '../modelos/colaboradores.model';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public colaboradores:Colaboradores[]=[];
  public item:any;
  public accion:string

  constructor(public service:ServicioService) { }

  ngOnInit(): void {
    this.service.obtenerDatos().subscribe(res=>this.organizar(res))
  }

  organizar(res){
    // codigo , estilos...
      this.colaboradores=res
    /*let colaborador:any=[];
    res.map(this.colaboradores =>{
      colaborador = new Colaboradores(
      this.colaboradores.usuarioRed,
      this.colaboradores.nombre,
      this.colaboradores.apellido,
      this.colaboradores.cargo,
      this.colaboradores.id,
      )
      this.colaboradores.push(colaborador)
    })
    console.log(this.colaboradores)*/
  }

  modificacion(item,accion){
    this.item=item;
    this.accion=accion;
  }

  eliminar(item){
    this.service.eliminarDatos(item.identificacion).subscribe(res=>console.log(res))
  }

  /*ngOnChanges(): void {
    console.log('prueba render'),
    this.service.obtenerDatos().subscribe(res=>this.organizar(res))
  }*/

}
