import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
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

  collapseNavbar(navbarCollapse: HTMLElement, navbarToggler: HTMLButtonElement) {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simula hacer clic en el botón para contraer el menú
    }
  }
}
