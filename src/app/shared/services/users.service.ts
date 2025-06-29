import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IpostUser, IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

USER_URL:string=`https://jsonplaceholder.typicode.com/users`;

  constructor(
    private _http:HttpClient
  ) { }

  getAllUsers():Observable<IUser[]>{
    return this._http.get<IUser[]>(this.USER_URL)
  }

  getAllPostByUser(id:number):Observable<IPost[]>{
    return this._http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }

}
