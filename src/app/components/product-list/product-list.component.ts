import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products : Product[] = [];

  constructor(private productService:ProductService){}


  ngOnInit(): void {
   this.listProducts();
  }

  listProducts(){
    console.log('listProducts');
    this.productService.getProducts().subscribe(
      data => {this.products = data
        console.log(data);      
      }
    );
  }

  deleteProductById(id:number){
    Swal.fire({
      title: "Estas seguro de eliminar este registro?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(id).subscribe(
          ()=> this.listProducts()
        );
        Swal.fire({
          title: "Prodcutos",
          text: "Prodcuto eliminado satifactoriamente",
          icon: "success"
        });
      }
    });
   

  }

}
