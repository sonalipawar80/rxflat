import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map-users',
  templateUrl: './merge-map-users.component.html',
  styleUrls: ['./merge-map-users.component.scss']
})
export class MergeMapUsersComponent implements OnInit {
  usersArr: Array<any> = []
  constructor(
    private _userSer: UsersService
  ) { }

  ngOnInit(): void {
    this.fetchAllUser()

  }

  // fetchAllUser() {
  //   this._userSer.getAllUser()
  //     .subscribe(users => {
  //       users.forEach((user: any) => {
  //         this._userSer.getPostofUser(user.id).subscribe(post => {   
  //           let obj = {
  //               ...user,
  //               postArr: post
  //             }
  //             this.usersArr.push(obj)
  //             console.log(this.usersArr)
  //           })
  //       });
  //     })
  // }

  fetchAllUser() {
    this._userSer.getAllUser()
      .pipe(
        mergeMap(user => from(user)),
        mergeMap((user: any) => {
          return this._userSer.getPostofUser(user.id)
            .pipe(
              map(posts => {
                return {
                  ...user,
                  postsArr: posts
                }
              })
            )
        }),
        toArray()
      )

      .subscribe(res => {
        console.log(res);
        this.usersArr = res
      })
  }

}
