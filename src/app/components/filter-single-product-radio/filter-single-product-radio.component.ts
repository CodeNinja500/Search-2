import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filter-single-product-radio',
  styleUrls: ['./filter-single-product-radio.component.scss'],
  templateUrl: './filter-single-product-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSingleProductRadioComponent {
  readonly filterForm: FormGroup = new FormGroup({ category: new FormControl('') });

  readonly categoryList$: Observable<string[]> = this._productsService.getAllCategories();

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.filterForm.valueChanges.pipe(
      map((form) => form.category),
      startWith('')
    )
  ]).pipe(
    map(([products, category]) => {
      return products.filter((product) => product.category === category || category === '');
    })
  );

  constructor(private _productsService: ProductsService) {}

  onFilterFormSubmitted(filterForm: FormGroup): void {}
}
