import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#c49b28'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#FFC72C'; // Restablece el color original
  }

  changeColorText(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.color = '#6c757d'; // Cambia el color según tus preferencias
  }

  resetColorText(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.color = '#27251f'; // Restablece el color original
  }
}
