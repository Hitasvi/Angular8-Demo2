import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId=0;
  productName='';
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      params=>this.productId=params['pid']
    )
    this.activatedRouter.queryParams.subscribe(
      params=>this.productName=params['prdName']||'No Product'
    )
  }

}
