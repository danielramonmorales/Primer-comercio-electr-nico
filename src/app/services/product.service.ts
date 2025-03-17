import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/common/product';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://localhost:8080/api/v1/admin/products";  

  constructor(private httpClient: HttpClient, private headerService:HeaderService) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl, {headers: this.headerService.headers});
    
  }

  createProduct(formData: any): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, formData, {headers: this.headerService.headers});
    
  }

  

  deleteProductById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`, {headers: this.headerService.headers})
   
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`,{headers: this.headerService.headers})
    
  }

  searchProducts(query: string): Observable<Product[]> {
    const searchUrl = `${this.apiUrl}/search?query=${query}`;
    return this.httpClient.get<Product[]>(searchUrl, { headers: this.headerService.headers });
  }

}




