import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get(
        `https://api.unsplash.com/photos/${id}?client_id=p6_06PbiNAJkker4RBdkHKY63xJqDFTooo45CqnzEA0`
      )
      .subscribe((data) => {
        this.product = data;
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
