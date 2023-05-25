import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  changeColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.color = '#27251f'; // Cambia el color según tus preferencias
  }

  resetColor(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.color = '#6c757d'; // Restablece el color original
  }

  
}
