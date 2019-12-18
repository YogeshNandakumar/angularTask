import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommonService } from '../common.service';
import { isNullOrUndefined } from 'util';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() categoryId: number;

  productList: Product[];

  constructor(
    private commonSrv: CommonService
  ) { }

  ngOnInit() {
    if (!isNullOrUndefined(this.categoryId)) {
      this.getProductList();
    }
  }

  ngOnChanges( changes: SimpleChanges) {
    if (!isNullOrUndefined(changes.categoryId)) {
      this.getProductList();
    }
  }

  getProductList() {
    this.productList = this.commonSrv.getProductListBasedOnCategory(this.categoryId);
  }
}
