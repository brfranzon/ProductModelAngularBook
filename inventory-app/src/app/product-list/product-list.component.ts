import { Component, OnInit, Input} from '@angular/core';

import { ProductModel } from '../Model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 @Input() products: ProductModel[];
 
  ngOnInit(): void {
    console.log(this.products);
  }

  productSelected(product: ProductModel){
      console.log("Product selected", product)
  }

  isSelected(product: ProductModel){

  }

}
