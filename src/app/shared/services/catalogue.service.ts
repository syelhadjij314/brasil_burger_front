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
    return this.http.get<Catalogue>(this.apiCatalogue).pipe(
      map(        
        data => {          
          data.produit  = [...data["hydra:member"][0].menus,
          ...data["hydra:member"][1].burgers]
          data.burgers=data["hydra:member"][1].burgers
          data.menus=data["hydra:member"][0].menus
          // console.log(data.produit);
          return data
        }
      ),
    )    
  }
  produitId$ = (id:number) => {
    return this.http.get<Catalogue>(`${this.apiCatalogue}/${id}`)
  }
}
