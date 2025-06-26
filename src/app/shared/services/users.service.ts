import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

USER_URL:string=`https://jsonplaceholder.typicode.com/users`;

  constructor(
    private _http:HttpClient
  ) { }

  getAllUser():Observable<User[]>{
    return this._http.get<User[]>(this.USER_URL)
  }

  getPostofUser(id:number):Observable<postUser[]>{
   return this._http.get<postUser[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
}
