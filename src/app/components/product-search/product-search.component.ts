import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  query: string = '';
  results: Product[] = [];

  constructor(private productService: ProductService) {}

  onSearch() {
    if (this.query.trim() === '') {
      this.results = [];
      return;
    }

    this.productService.searchProducts(this.query).subscribe(
      (data) => this.results = data,
      (error) => console.error('Error en la búsqueda', error)
    );
  }
}

