import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    { pid: 1001, prdName: 'HP', price: 50000 },
    { pid: 1002, prdName: 'Dell', price: 55000 }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  showDetails(product) {
    this.router.navigate(['contactUs/productDetails', product.pid], { queryParams: { prdName: product.prdName } })
  }
}
