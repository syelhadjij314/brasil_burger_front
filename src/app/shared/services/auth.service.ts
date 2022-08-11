import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin= "http://localhost:8000/api/login_check";

  headers: HttpHeaders;
  constructor(private http : HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
  }

  findLogin(user: User){
    return this.http.post(this.urlLogin, user)
  }
  isLoogedIn(){
    
    return localStorage.getItem('token') != null
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  haveAccess(){
    var loginToken = localStorage.getItem('token') || '';
    var extractedToken=loginToken.split('.')[1];
    var atobData= atob(extractedToken);
    var finalData= JSON.parse(atobData);
    if (finalData.role=='ROLE_CLIENT') {
      return true;
    }
    // console.log(finalData);
    alert("Access Denied")
    return false;
  }
}
