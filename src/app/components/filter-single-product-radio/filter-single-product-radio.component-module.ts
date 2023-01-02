import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { FilterSingleProductRadioComponent } from './filter-single-product-radio.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule, MatListModule],
  declarations: [FilterSingleProductRadioComponent],
  providers: [],
  exports: [FilterSingleProductRadioComponent]
})
export class FilterSingleProductRadioComponentModule {
}
