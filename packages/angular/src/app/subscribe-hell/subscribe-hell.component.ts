import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'courses-and-tips-subscribe-hell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!--    Wrong way-->
    <ng-container *ngIf="product">
      <p>{{ product.name }}: {{ product.price }}€</p>
    </ng-container>
    <!--
    Correct way

    In addition, the async pipe will unsubscribe from the observable when the component is destroyed.
    -->
    <ng-container *ngIf="product$ | async as product">
      <p>{{ product.name }}: {{ product.price }}€</p>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeHellComponent implements OnInit {
  private readonly _productID$ = inject(ActivatedRoute).params.pipe(
    // We pick the productID from the route params.
    map((params) => String(params['id'])),
    // We emit the productID only if it's defined.
    filter((id) => !!id),
    // We emit the productID only if it's different from the previous one.
    distinctUntilChanged()
  );

  private readonly _getProductByID$ = inject(ProductsService).getProductByID;
  product: Product | undefined;
  product$ = this._productID$.pipe(
    switchMap((productID) => this._getProductByID$(productID))
  );

  ngOnInit() {
    /**
     * Wrong way, it's called a "subscribe hell".
     *
     * In addition, the two subscriptions are not unsubscribed and will cause memory leaks.
     */
    this._productID$.subscribe((productID) => {
      this._getProductByID$(productID).subscribe((product) => {
        this.product = product;
      });
    });
  }
}
