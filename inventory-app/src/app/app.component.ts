import { Component, EventEmitter } from '@angular/core';
import { ProductModel } from '../app/Model/product.model';
import { Test } from '../assets/test.class'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 products: ProductModel[];
 onProductSelected: ProductModel;

  constructor() { 
    this.products = [
    
      new ProductModel(
      'NICEHAT_1',// sku
      'A Nice Black Hat',// name
      '../assets/img_1.jpg',// imageUrl
      ['Men','Accessories','Hats'],// department
      29.99),

    new ProductModel(
        'NICEHAT_2',// sku
        'A Nice Black Hat',// name
        '../assets/img_2.jpg',// imageUrl
        ['Men','Accessories','Hats'],// department
        59.99),

    new ProductModel(
          'NICEHAT_3',// sku
          'A Nice Black Hat',// name
          '../assets/img_3.jpg',// imageUrl
          ['Men','Accessories','Hats'],// department
          4.99)
      
     ]
 }

}
