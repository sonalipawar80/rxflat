import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IpostUser, IUser } from '../../models/user';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map-users',
  templateUrl: './merge-map-users.component.html',
  styleUrls: ['./merge-map-users.component.scss']
})
export class MergeMapUsersComponent implements OnInit {
  usersArr: Array<IpostUser> = [];

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this.fetchAllUser();
  }

  fetchAllUser() {
    this._userService.getAllUsers()
      .pipe(
        mergeMap(users =>from(users)),
        mergeMap((user: any) => {
          return this._userService.getAllPostByUser(user.id)
            .pipe(
              map((posts:any) => {
                return {
                  ...user,
                  postsArr: posts
                };
              })
            );
        }),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.usersArr = res;
      });
  }
}

