import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }
  private urlCommande= "http://localhost:8000/api/commandes";

  getCommande(): Observable<any> {
    return this.http.get<any>(this.urlCommande);
  }
  setCommande(body: any):Observable<any> {
    return this.http.post<any>(this.urlCommande,body)
  }
}
