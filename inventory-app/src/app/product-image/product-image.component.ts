import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Model/product.model';
import { Input } from '@angular/core';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.product)
  }

}
