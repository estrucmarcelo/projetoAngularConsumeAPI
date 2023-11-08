import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list-chapter-tag',
  templateUrl: './list-chapter-tag.component.html',
  styleUrls: ['./list-chapter-tag.component.css']
})
export class ListChapterTagComponent {

  constructor(private productService: ProductService){

  }

  listChapter: any = []

  ngOnInit(){
    this.loadChapter()
  }

  loadChapter(){
    this.productService.getChapterTag().subscribe((data:{}) =>{
      this.listChapter = data
    })
  }

}
