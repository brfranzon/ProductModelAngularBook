import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../Model/product.model';
import { Input } from '@angular/core';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() onMouseOverBild: EventEmitter<ProductModel>;
  @Output() onMouseLeaveBild: EventEmitter<ProductModel>;

  constructor() { 
    this.onMouseOverBild = new EventEmitter();  
    this.onMouseLeaveBild = new EventEmitter();
  }

  mouseOverBild(){
    this.onMouseOverBild.emit(this.product);
  }

  mouseLeaveBild(){
    this.onMouseLeaveBild.emit(this.product);
  }

  ngOnInit(): void {
    console.log(this.product)
  }

}
