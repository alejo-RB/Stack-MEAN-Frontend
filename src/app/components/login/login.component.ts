import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public registerService: RegisterService) {}

  ngOnInit(): void {}

  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#c49b28'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#FFC72C'; // Restablece el color original
  }

  getComprobacion(form: NgForm) {
    var fo = form.value.name;
    var foPass = form.value.password;
    this.registerService.getName(form.value.name).subscribe(
      (res) => {
        var nombre = (this.registerService.Registers = res);
        var name = new Array(1);
        if (nombre) {
          name = nombre.map(function (x) {
            return x.name;
          });
        }
        var n = name[0];
        var x = fo;
        //Comprobar nombre
        if (x == n) {
          this.registerService.getPassword(foPass).subscribe(
            (res) => {
              var pass = (this.registerService.Registers = res);
              var password = new Array(1);
              if (pass) {
                password = pass.map(function (x) {
                  return x.password;
                });
              }
              var pbuscada = password[0];
              var pingresada = foPass;
              //Comprobar password
              if (pbuscada == pingresada) {
                this.Mensaje_confirmacion(form);
              } else {
                this.clave_denegado();
              }
            },
            (err) => console.log(err)
          );
        } else {
          this.usuario_denegado();
        }
      },
      (err) => console.log(err)
    );
  }

  Mensaje_confirmacion(form: NgForm) {
    Swal.fire({
      title: 'BIENVENIDO Sr. ' + form.value.name,
      icon: 'success',
      confirmButtonText: 'ACEPTAR',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('http://localhost:4200/menu', '_self');
      }
    });
  }

  usuario_denegado() {
    Swal.fire({
      title: 'EL USUARIO ES INCORRECTO',
      icon: 'warning',
      confirmButtonText: 'ACEPTAR',
    });
  }
  clave_denegado() {
    Swal.fire({
      title: 'LA CLAVE ES INCORRECTA',
      icon: 'warning',
      confirmButtonText: 'ACEPTAR',
    });
  }
}
