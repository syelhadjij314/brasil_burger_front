import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlCommande= "http://localhost:8000/api/commandes";
  tabCommande : Array<any> =[]

  constructor(private http : HttpClient) { }

  getCommande(): Observable<any> {
    return this.http.get<any>(this.urlCommande).pipe(
      map(
        (response:any) => response["hydra:member"]
      )
    );
  }
  setCommande(body: any):Observable<any> {
    return this.http.post<any>(this.urlCommande,body)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  
}
