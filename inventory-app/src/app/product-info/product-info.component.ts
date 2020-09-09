import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../Model/product.model';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  isSelected: boolean = false;
  @Input() product: ProductModel;
  @Output() selectedProduct: EventEmitter<ProductModel>;

  constructor() { 
    this.selectedProduct = new EventEmitter();
  }

  ngOnInit(): void {
  }

  productClicked(){
    this.selectedProduct.emit(this.product);
    this.isSelected =! this.isSelected;
   }
  

}
