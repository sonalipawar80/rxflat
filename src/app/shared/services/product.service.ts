import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpostReview, Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  fakeProductURL:string=`https://fakestoreapi.com/products`;
  reviewURL:string=`https://jsonplaceholder.typicode.com/posts`;
  constructor(
    private _http:HttpClient
  ) { }


  getAllFakeProd():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this.fakeProductURL)
  }

  getFakeProdWithReview(id:number):Observable<IpostReview>{
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
}
