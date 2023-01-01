import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleProductComponent } from './components/sort-single-product/sort-single-product.component';
import { SortSingleProductComponentModule } from './components/sort-single-product/sort-single-product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'sort-single-product', component: SortSingleProductComponent }]), SortSingleProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
