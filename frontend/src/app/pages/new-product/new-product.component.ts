import { ProductsListService } from './../../products-list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  product: Product = {
    name: '',
    item: '',
    description: '',
  }

  constructor(private fb: FormBuilder,
    private productsList: ProductsListService,
    private router: Router, 
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      item: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  createProduct(): void {
    this.productsList.create(this.product).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }
}