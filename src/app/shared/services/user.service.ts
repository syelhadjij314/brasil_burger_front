import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'http://localhost:8000/api/users';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  getAll() {
    return this.http.get<any>(this.urlUser, { headers: this.headers }).pipe(
      map(
        data => data['hydra:member']
      ));
    }
    addUser(p: User) {
    return this.http.post(this.urlUser, p, { headers: this.headers });
    }
}
