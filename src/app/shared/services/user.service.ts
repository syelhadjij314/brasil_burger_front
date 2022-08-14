import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'http://localhost:8000/api/users';
  // private urlUserCommandes = 'http://localhost:8000/api/users'
  usercom:User={}
  headers: HttpHeaders;

  constructor(private http: HttpClient,private authServ:AuthService) {
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
    getCommandesClient(client_id:number){
      return this.http.get(this.urlUser+"/"+client_id)
    }
    getUserByEmail(emailUser:string){
      this.http.get<any>(this.urlUser).subscribe(u=>{
        u["hydra:member"].forEach((user:User)=>{          
            if(user.username==emailUser){
              this.usercom=user
              this.usercom.id=user.id;
            }
        }); 
      })
      console.log(this.usercom.id);
        return this.usercom.id;
      
    }
}
