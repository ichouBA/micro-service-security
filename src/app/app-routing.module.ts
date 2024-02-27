import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomerComponent} from "./customer/customer.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "products", component: ProductsComponent, canActivate: [AuthGuard], data: {roles:["USER"]}},
  {path: "customers", component: CustomerComponent, data: {roles:["ADMIN"]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
