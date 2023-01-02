import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortSingleProductComponent } from './components/sort-single-product/sort-single-product.component';
import { FilterSingleProductRadioComponent } from './components/filter-single-product-radio/filter-single-product-radio.component';
import { SortMultiJobsComponent } from './components/sort-multi-jobs/sort-multi-jobs.component';
import { FilterMultiUsersComponent } from './components/filter-multi-users/filter-multi-users.component';
import { SortSingleProductComponentModule } from './components/sort-single-product/sort-single-product.component-module';
import { FilterSingleProductRadioComponentModule } from './components/filter-single-product-radio/filter-single-product-radio.component-module';
import { SortMultiJobsComponentModule } from './components/sort-multi-jobs/sort-multi-jobs.component-module';
import { FilterMultiUsersComponentModule } from './components/filter-multi-users/filter-multi-users.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'sort-single-product', component: SortSingleProductComponent }, { path: 'filter-single-product-radio', component: FilterSingleProductRadioComponent }, { path: 'sort-multi-jobs', component: SortMultiJobsComponent }, { path: 'filter-multi-users', component: FilterMultiUsersComponent }]), SortSingleProductComponentModule, FilterSingleProductRadioComponentModule, SortMultiJobsComponentModule, FilterMultiUsersComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
