import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user: User = {
    userName:"admin",
    password:"123456"
  }

  categories: Category[] = [
    {categoryId: 101, categoryName: 'Electronics'},
    {categoryId: 102, categoryName: 'Electrical'},
    {categoryId: 103, categoryName: 'Mechanical'},
    {categoryId: 104, categoryName: 'Robotics'}
  ];

  products: Product[] = [
    { productId: 10001, productName: 'Laptop', categoryId: 101 },
    { productId: 10002, productName: 'Router', categoryId: 101 },
    { productId: 10003, productName: 'Tube light', categoryId: 102 },
    { productId: 10004, productName: 'Fan', categoryId: 102 },
    { productId: 10005, productName: 'Bike', categoryId: 103 },
    { productId: 10006, productName: 'Engine', categoryId: 103 },
    { productId: 10007, productName: 'wheels', categoryId: 103 },
  ];
  constructor() { }


  getCategories() {
    return this.categories;
  }

  getProductListBasedOnCategory(categoryId: number): Product[] {
    return this.products.filter( value => value.categoryId === categoryId);
  }

  login(loginObj:User){
    return (loginObj.userName == this.user.userName && loginObj.password == this.user.password);
  }

  getNotifications(){
    return JSON.parse(localStorage.getItem('usersList'));
  }
}
