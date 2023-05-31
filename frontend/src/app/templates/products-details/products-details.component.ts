import { Product } from 'src/app/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/products-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id: string;
  product: Product[] = [];
  info: Product | undefined;
  description: string;
  item: string;

  constructor(
    private productsList: ProductsListService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.item = this.route.snapshot.paramMap.get('item') || '';
    this.description = this.route.snapshot.paramMap.get('description') || '';
  }

  ngOnInit(): void {
    this.productsList.readById(this.id).subscribe(
      data => {
        this.info = data        
      }
    );
  }

  editButton(): void {
    console.log('Edit Button Clicked');
  }
}
