import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CarsComponent } from './cars/cars.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'', component: AdminComponent},
  {path:'cars',component: CarsComponent},
  {path:'customer',component: CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
