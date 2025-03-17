import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit{
  
  isDarkMode = false; // Inicialmente en modo claro
  products: Product [] = [];

  constructor(private homeService:HomeService){

  }

  ngOnInit(): void {
      // Cargar el estado guardado en localStorage
      const savedTheme = localStorage.getItem('darkMode');
      this.isDarkMode = savedTheme === 'true';
    this.homeService.getProducts().subscribe(
      data => this.products = data
    );

  }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode)); // Guardar preferencia
  }
   
}
