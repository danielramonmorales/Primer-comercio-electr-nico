import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../common/category';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = 'http://localhost:8080/api/v1/admin/categories';


  constructor(private httpClient:HttpClient,private headerService: HeaderService) { }

  getCategoryList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiUrl, {headers: this.headerService.headers});
  }

  createCategory(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(this.apiUrl,category,{headers: this.headerService.headers} );

  }

  deleteCategoryById(id:number):Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`, {headers: this.headerService.headers});
  }

  getCategoryById(id:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.apiUrl}/${id}`, {headers: this.headerService.headers});
  }
}
