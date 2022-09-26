import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'cars',component: CarsComponent},
  {path:'customer',component: CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
