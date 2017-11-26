import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: 'Junior Enrique',
    apellido: 'Rojas',
    correo: 'rojasjuniore@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

  private guardar(forma: NgForm) {
    // console.log('Formulario posteado');
    console.log('ngForm', forma);
    console.log('Valor', forma.value);

    console.log('Usuario: ', this.usuario);
  }

}
