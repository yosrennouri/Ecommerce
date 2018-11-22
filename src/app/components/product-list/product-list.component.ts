import { ProductListService } from './product-list.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Product} from './product.model' ;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {
@Output() ProductSelected = new EventEmitter<Product>();
Products: Product[]= [];

  constructor(private ProductListService: ProductListService) { }

  ngOnInit() {

  }
onProductSelected(product: Product){
  this.ProductSelected.emit(product);
}
}
