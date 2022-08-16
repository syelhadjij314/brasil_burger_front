import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlCommande= "http://localhost:8000/api/commandes";
  tabCommande : Array<any> =[]
  headers:HttpHeaders;
  constructor(private http : HttpClient){
    const token = localStorage.getItem('token');
    this.headers=new HttpHeaders().set('Authorization', 'Bearer ' + token); 
  }

  getCommande(): Observable<any> {
    return this.http.get<any>(this.urlCommande).pipe(
      map(
        (response:any) => response["hydra:member"]
      )
    );
  }
  postCommande(body: any){
    this.http.post<Commande>(this.urlCommande,body,{ headers: this.headers }).subscribe((response) =>
      console.log(response)
    )
  }
  updateCommande(id:number,body:object){
    this.http.put(this.urlCommande+"/"+id,body).subscribe()
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
