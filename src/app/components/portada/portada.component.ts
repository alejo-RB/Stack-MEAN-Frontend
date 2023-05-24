import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styles: [],
})
export class PortadaComponent implements OnInit {
  imagenes: any[] = [{ name: 'sanduche', img: './assets/img/carrusel1.jpg' }, {    name: "hamburguesa", img: "./assets/img/carrusel2.png"}, { name: "vendedora", img: "./assets/img/carrusel3.jpg", description: "Nos cuidamos entre todos"}];

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 4000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
	}

  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#c49b28'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#FFC72C'; // Restablece el color original
  }


  ngOnInit(): void {}
}
