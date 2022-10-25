import { DoneComponent } from './done/done.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PorductListComponent} from './porduct-list/porduct-list.component'
const routes: Routes = [
  {path:'', component: PorductListComponent},
  { path: 'cart', component: CartComponent },
  { path: 'productpage/:id', component: ProductPageComponent },
  { path: 'success/:total', component: DoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
