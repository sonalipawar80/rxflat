import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { from, map, mergeMap, toArray } from 'rxjs';
import { Iproduct, IProductPost } from '../../models/product';

@Component({
  selector: 'app-merge-map-prod',
  templateUrl: './merge-map-prod.component.html',
  styleUrls: ['./merge-map-prod.component.scss']
})
export class MergeMapProdComponent implements OnInit {
  count:number=1;
  productArr!: IProductPost[];
  star:number[]=[1,2,3,4,5]
  constructor(
    private _productService: ProductService
  ) { }
  ngOnInit(): void {
    this.fetchAllProduct()
  }
  fetchAllProduct() {
    this._productService.getAllFakeProd()
      .pipe(
        mergeMap(prodducts => from(prodducts)),
        mergeMap((prod: any) => {
          return this._productService.getFakeProdWithReview(prod.id)
            .pipe(
              map((post: any) => {
                return {
                  ...prod,
                  review: post
                }
              })
            )
        }),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.productArr=res
      })
  }

  onclick(flag:boolean){
    if(flag){
      this.count++
    }else{
      this.count--
    }
  }
}
