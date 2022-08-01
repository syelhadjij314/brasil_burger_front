import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Complement } from '../models/complement';

@Injectable({
  providedIn: 'root'
})
export class ComplementService {
  private apiComplement :string = "http://localhost:8000/api/complements";
  constructor(private http:HttpClient) { }
  getAllComplement():Observable<Complement> {
    return this.http.get<Complement>(this.apiComplement).pipe(
      /* map(        
        data => {          
          data.produit  = [...data["hydra:member"][0].menus,
          ...data["hydra:member"][1].burgers]
          data.burgers=data["hydra:member"][1].burgers
          data.menus=data["hydra:member"][0].menus
          // console.log(data.produit);
          return data
        }
      ), */
      tap( data => console.log(data["hydra:member"][0]))
    )    
  }
  produitId$ = (id:number) => {
    return this.http.get<Complement>(`${this.apiComplement}/${id}`)
  }
}
