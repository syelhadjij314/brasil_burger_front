import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor( private http:HttpClient) { }
 
  urlZone="http://localhost:8000/api/zones";
  private urlLivreur = 'http://localhost:8000/api/livreurs';

  getZone():Observable<any>{
    return this.http.get<any>(this.urlZone).pipe(
      map(
        data => data["hydra:member"]
      )
    )
  }
  getLivreur() {
    return this.http.get<any>(this.urlLivreur).pipe(
      map(
        data => data['hydra:member']
      ));
    }
}
