import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register/register.service';
import { NgForm } from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(public registerService: RegisterService) { }

  ngOnInit(): void {
	
  }

  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#c49b28'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#FFC72C'; // Restablece el color original
  }

  addRegister(form: NgForm) {
      this.registerService.postRegister(form.value).subscribe((res) => {

      });
  }

	getName(form: NgForm){
	var fo = form.value.name;
	var fovalue= form.value;
		this.registerService.getName(form.value.name).subscribe(
		res => {	
			var nombre = this.registerService.Registers=res;
			var name = new Array(1);
			if (nombre){
			name = nombre.map(function(x){
				return x.name;
			});
			}
			var n = name[0];
			var x = fo;
				if(x==n){
					this.Mensaje_denegado(); 
				}else{
					this.registerService.postRegister(fovalue).subscribe((res) => {
      					});
					this.Mensaje_confirmacion();
					
					}			
		},
		err => console.log(err)
		);	
	}
	
	
	Mensaje_confirmacion() {
			  Swal.fire({
			  title: 'REGISTRO CREADO',
			  icon: 'success',			  
			  confirmButtonText: 'ACEPTAR'
			}).then((result) => {
			  if (result.isConfirmed) {
					window.open("http://localhost:4200/login","_self");
			  }
  	})
}

	Mensaje_denegado() {
				  Swal.fire({
				  title: 'EL USUARIO YA EXISTE',
				  icon: 'warning',
				  confirmButtonText: 'ACEPTAR'
				})
	  }
	
	
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
