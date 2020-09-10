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
      'Apfel',// sku
      'A Nice Black Hat',// name
      '../assets/img_1.jpg',// imageUrl
      ['Schnitzel','Saft','Hats'],// department
      29.99),

    new ProductModel(
        'Motorrad',// sku
        'A Nice Black Hat',// name
        '../assets/img_2.jpg',// imageUrl
        ['Men','Accessories','Beatles'],// department
        59.99),

    new ProductModel(
          'Kinder',// sku
          'A Nice Black Hat',// name
          '../assets/img_3.jpg',// imageUrl
          ['Radiohead','Darmstadt','Sommer'],// department
          4.99),

    new ProductModel(
          'Kinder2',// sku
          'A Nice Black Hat2',// name
          '../assets/img_4.jpg',// imageUrl
          ['Radiohead2','Darmstadt2','Sommer2'],// department
           8.89)
      
     ]
 }

}
