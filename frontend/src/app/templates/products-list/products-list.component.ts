import { Component, OnInit } from '@angular/core';
import { ProductsListService } from './../../products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  info: any[] = [];
  product: any[] = [];

  constructor(
    private productsList: ProductsListService  ) {}

  ngOnInit(): void {
    this.productsList.getData().subscribe(
      data => {
        this.info = data;
      }
    )
  }
}
