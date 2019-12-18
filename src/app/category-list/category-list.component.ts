import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[];
  currentCategory: number;

  constructor(
    private commonSrv: CommonService
  ) { }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryList = this.commonSrv.getCategories();
  }

  onCategoryClick(categoryId) {
    this.currentCategory = categoryId;
  }

}
