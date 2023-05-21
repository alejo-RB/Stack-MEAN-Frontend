import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styles: [],
})
export class PortadaComponent implements OnInit {
  imagenes: any[] = [{ name: 'sanduche', img: './assets/img/carrusel1.jpg' }, {    name: "hamburguesa", img: "./assets/img/carrusel2.png"}, { name: "vendedora", img: "./assets/img/carrusel3.jpg", description: "Nos cuidamos entre todos"}];

  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#c49b28'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#FFC72C'; // Restablece el color original
  }

  constructor(private _config: NgbCarouselConfig) {}

  ngOnInit(): void {}
}
