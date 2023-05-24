import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isScreenSmall: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 992; // Define el ancho límite para considerar una pantalla pequeña
  }
  constructor(public router: Router) { }
}
