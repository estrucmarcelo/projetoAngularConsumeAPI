import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  constructor(private productService: ProductService){

  }

  listProducts: any = []

  ngOnInit(){
    this.loadProducts()
  }

  loadProducts(){
    this.productService.getProducts().subscribe((data: {}) =>{
      this.listProducts = data
    })
  }
}
