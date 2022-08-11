import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'blog-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User= {};
  users: Array <User>= [];

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.getAll().subscribe(res => {
      this.users = res;
    });
  }

}
