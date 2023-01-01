import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sort-single-product',
  styleUrls: ['./sort-single-product.component.scss'],
  templateUrl: './sort-single-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortSingleProductComponent {
  readonly sortingOpt$: Observable<string[]> = of(['asc', 'desc']);
  readonly sortForm: FormGroup = new FormGroup({
    order: new FormControl(''),
  });

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.sortForm.valueChanges.pipe(
      map((form) => form.order),
      startWith('')
    ),
  ]).pipe(
    map(([products, order]) => {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          if (order === 'asc') return 1;
          if (order === '') return 0;
          else return -1;
        }
        if (a.price < b.price) {
          if (order === 'asc') return -1;
          if (order === '') return 0;
          else return 1;
        } else return 0;
      });
    })
  );

  constructor(private _productsService: ProductsService) {}

  onSortFormSubmitted(sortForm: FormGroup): void {}
}
