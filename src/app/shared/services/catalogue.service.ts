import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiCatalogue="http://localhost:8000/api/catalogues"

  constructor(private http:HttpClient) { }
  getCatalogue():Observable<Catalogue> {
    let myHeader= new HttpHeaders
    /* myHeader.set('Content-type','application/ld+json')
    myHeader.set('Accept','application/ld+json') */
    return this.http.get<Catalogue>(this.apiCatalogue).pipe(
      map(
        
        data => {
          data.produit  = [...data["hydra:member"][0].menus,...data["hydra:member"][1].burgers]
          // console.log(data.produit);
          return data
        }
      ),
      /* tap(data => console.log(data['hydra:member'])
      
      ) */
    )
    
  }
  produitId$ = (id:number) => {
    return this.http.get<Catalogue>(`${this.apiCatalogue}/${id}`)
  }
}
