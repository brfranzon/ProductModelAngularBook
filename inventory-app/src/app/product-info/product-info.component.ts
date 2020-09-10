import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../Model/product.model';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  isSelected: boolean = false;
  overBild: boolean = false;

  @Input() product: ProductModel;
  @Output() selectedProduct: EventEmitter<ProductModel>;

  constructor() { 
    this.selectedProduct = new EventEmitter();
    console.log('bild...', this.overBild);
  }

  productClicked(): void{
    this.selectedProduct.emit(this.product);
    this.isSelected =! this.isSelected;
   }
  
  onMouseOver(product: ProductModel): void{
     this.overBild =! this.overBild;
   }

  onMouseLeave(product: ProductModel): void{
    this.overBild = false;
    console.log('bild leave...');
  }
  
  
}
