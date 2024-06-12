import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://api.unsplash.com/photos?client_id=p6_06PbiNAJkker4RBdkHKY63xJqDFTooo45CqnzEA0'
      )
      .subscribe((data: any) => {
        this.products = data;
        this.filteredProducts = data;
      });
  }

  filterProducts(e: any) {
    console.log(e.target.value);

    console.log(this.filteredProducts);

    this.filteredProducts = this.products.filter((product) =>
      product.user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }

  viewProduct(id: string) {
    this.router.navigate(['/product', id]);
  }
}
