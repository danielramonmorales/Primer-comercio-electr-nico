import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  id : any;
  name : string = '';
  code : string = 'C777';
  description : string = '';
  urlImage : string= '';
  price : number = 0;
  userId : string = '1';
  categoryId : number = 3;
  user : number = 0;

  selectFile! : File;

  categories : Category [] = [];


  constructor(private productService : ProductService,
     private router:Router,
      private activatedRoute: ActivatedRoute,
       private categoryService:CategoryService,
        private toastr: ToastrService,
      private sessionStorage: SessionStorageService ){
    
  }



  ngOnInit(): void {
    this.getProductById();
    this.getCategories();
    this.user = this.sessionStorage.getItem('token').id;
    this.userId = this.user.toString();
  }

  addProduct(){
    const formData = new FormData();
    if (this.id !== undefined && this.id !== null) {
      formData.append('id', this.id.toString());
  }
    formData.append('name',this.name);
    formData.append('code', this.code);
    formData.append('description', this.description);
    formData.append('urlImage', this.urlImage);
    formData.append('price', this.price.toString());
    formData.append('image',this.selectFile);//ojo
    formData.append('userId', this.userId);
    formData.append('categoryId', this.categoryId.toString());
     
    console.log(formData)
    formData.forEach((valor, clave) => {
      console.log(`Clave: ${clave}, Valor: ${valor}`);
  });

 
  console.log(formData instanceof FormData); // Debería imprimir `true`

  this.productService.createProduct(formData).subscribe(
    data => {
      console.log(data);
      this.router.navigate(['admin/product']);
      this.toastr.success('producto registrado correctamente', 'productos')
    }
  );
      
}

getProductById(){
  this.activatedRoute.params.subscribe(
   prod => {
      let id = prod['id'];
      if(id){
        console.log('el valor de la variable id es: '+id);
        this.productService.getProductById(id).subscribe(
          data => {
            this.id = data.id;
            this.code = data.code;
            this.name = data.name;
            this.description = data.description;
            this.urlImage = data.urlImage;
            this.price = data.price;
            this.userId = data.userId;
            this.categoryId = data.categoryId;

          }
        )
      }
   } 
  )
}


OnFileSelected(event : any){
  this.selectFile = event.target.files[0];
}

  
getCategories(){
  return this.categoryService.getCategoryList().subscribe(
    data => this.categories = data
  );
}

}
