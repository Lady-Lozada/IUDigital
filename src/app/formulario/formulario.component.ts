import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges {

  public formColaboradores:FormGroup;
  @Input() accionForm:string;
  @Input() itemForm:any=[];

  constructor(public formBuilder:FormBuilder, public service:ServicioService) {
    this.formColaboradores=this.formBuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      cargo:['',Validators.required],
      id:['',Validators.required],
      usuarioRed:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.itemForm, this.accionForm)
    //Esta opcion permite que se vean los datos en el formulario al abrirlo
    if(this.accionForm=='editar'){
      this.formColaboradores.setValue({
      nombre:this.itemForm.nombre,
      apellido:this.itemForm.apellido,
      cargo:this.itemForm.cargo,
      id:this.itemForm.identificacion,
      usuarioRed:this.itemForm.usuarioRed,
      })
    }else{
      this.formColaboradores.reset()
    }
    /*if(this.accionForm=='editar'){
      this.formColaboradores.setValue({
      nombre:this.itemForm['nombre'],
      apellido:this.itemForm['apellido'],
      cargo:this.itemForm['cargo'],
      id:this.itemForm['id'],
      usuarioRed:this.itemForm['usuarioRed'],
      })
    }else{
      this.formColaboradores.reset()
    }*/
  }
  guardar(){
    let colaborador={
      usuarioRed:this.formColaboradores.value.usuarioRed,
      nombre:this.formColaboradores.value.nombre,
      apellido:this.formColaboradores.value.apellido,
      cargo:this.formColaboradores.value.cargo,
      identificacion:this.formColaboradores.value.id,
      estado:'A'
    }
    if(this.accionForm=='editar'){
      this.service.editarDatos(colaborador,this.itemForm['identificacion']).subscribe(res=>console.log(res))
      //this.service.editarDatos(colaborador,this.itemForm.identificacion).subscribe(res=>console.log(res))
    }else{
      console.log(colaborador),
      this.service.crearDatos(colaborador).subscribe(res=>console.log(res))
    }
  }
  /*
  guardar(){
    let colaborador= new Colaboradores{
      this.formColaboradores.value.usuarioRed,
      this.formColaboradores.value.nombre,
      this.formColaboradores.value.apellido,
      this.formColaboradores.value.cargo,
      this.formColaboradores.value.id,
      'A'
    }
    this.colaboradorFinal.push(colaborador)
    if(this.accionForm=='editar'){
      this.service.editarDatos(colaborador,this.itemForm['identificacion']).subscribe(res=>console.log(res))
    }else{
      console.log(colaborador),
      this.service.crearDatos(colaborador).subscribe(res=>console.log(res))
    }
  }
  */
}
