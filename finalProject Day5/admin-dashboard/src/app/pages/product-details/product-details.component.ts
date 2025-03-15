import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product?: Iproduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productServices.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        // console.log(response);
      },
      error: (err) => {},
    });
  }
}
