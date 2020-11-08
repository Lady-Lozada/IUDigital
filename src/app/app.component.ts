import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router){}
  title = 'practicaAngularSophos';
  public mensajeParaHijo:string='¡Curso Angular!';
  public mensajeDesdeHijo:string='¡Primer proyecto en angular!';
  public mostrar:boolean=true;

  redireccionar(){
    this.router.navigate(['/pag2'])
  }

  metodoRecibir(event){
    this.mostrar=event.mostrar;
  }

}
