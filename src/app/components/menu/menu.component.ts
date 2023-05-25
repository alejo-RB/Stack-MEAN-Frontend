import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

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

  changeColorSalir(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#ac231a'; // Cambia el color según tus preferencias
  }

  resetColorSalir(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#DA291C'; // Restablece el color original
  }

}
