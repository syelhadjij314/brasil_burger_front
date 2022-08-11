import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'blog-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent implements OnInit {
  messageClass=''
  message=''
  costumerid: any;
  editdata: any;
  responsedata: any;

  constructor(private authServ: AuthService,private route : Router) { }

  user: User= {}

  ngOnInit(): void {
  }
findLogin(user:User){
  console.log(user);
  
  if (user) {
    this.authServ.findLogin(this.user).subscribe(result => {
      if (result != null) {
          this.responsedata= result;
          localStorage.setItem('token',this.responsedata.jwtToken);
          this.route.navigate(['/produit/catalogue'])
          // console.log(this.user)
        }else{
          this.route.navigate(['/login'])
        }
      })
    }
  }
}
