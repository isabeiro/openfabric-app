import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsListService } from 'src/app/products-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  productForm!: FormGroup;
  product: Product = {
    name: '',
    item: '',
    description: '',
  }
  id!: string | null

  constructor(private productsList: ProductsListService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private http: HttpClient,
    private fb: FormBuilder,
  ) {    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id; 
      this.productsList.readById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue(product); 
      });
    });
  
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      item: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  editProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const product = this.product
    this.productsList.update(product).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/list'])
  }
}