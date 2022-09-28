import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'', redirectTo:'/cars', pathMatch:'full'},
  {path:'cars',component: CarsComponent},
  {path:'customer',component: CustomerComponent},
  {path:'login', loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
