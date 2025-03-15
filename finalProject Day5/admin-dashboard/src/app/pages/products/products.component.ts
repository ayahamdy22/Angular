import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products!: Iproduct[];
  searchTerm: string = '';
  filterProducts!: Iproduct[];

  constructor(public productServices: ProductService) {}

  ngOnInit(): void {
    this.productServices.getAllProduct().subscribe({
      next: (response) => {
        this.products = response;
        this.filterProducts = response;
        // console.log(response);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  // search
  searchProducts(event: Event) {
    let input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.filterProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.searchTerm) ||
        product.price.toString().includes(this.searchTerm) ||
        product.quantity.toString().includes(this.searchTerm)
    );
  }

  // delete
  deletProductHandler(productId: string) {
    this.productServices.deletProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );

        this.filterProducts = this.filterProducts.filter(
          (product) => product.id != productId
        );
      },
      error(err) {},
    });
    // console.log(productId);
  }
}
