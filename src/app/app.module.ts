import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { authGuard } from './guards/auth.guard';
import { ProductSearchComponent } from './components/product-search/product-search.component';
 
//RUTAS  
const routes : Routes = [
  //NOMBRE QUE APUNTE AL COMPONENTE 
  {path:'', component:HomeComponent},
  {path:'admin/product', component:ProductListComponent},
  {path:'admin/product/add', component:ProductAddComponent},
  {path:'admin/product/update/:id', component:ProductAddComponent},
  {path:'admin/category', component:CategoryListComponent},
  {path:'admin/category/add', component:CategoryAddComponent},
  {path:'admin/category/update/:id', component:CategoryAddComponent},
  {path:'cart/detailproduct/:id', component:DetailProductComponent},
  {path:'cart/sumary', component: SumaryOrderComponent},//,canActivate: [authGuard]
  {path:'payment/success', component: PaymentSuccessComponent},
  {path:'user/register', component: RegistrationComponent},
  {path:'user/login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},

  

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    DetailProductComponent,
    HeaderUserComponent,
    SumaryOrderComponent,
    PaymentSuccessComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
