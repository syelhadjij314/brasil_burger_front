import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private apiDetail="http://localhost:8000/api/details"

  constructor(private http:HttpClient) { }
  getDetail():Observable<Detail> {
    return this.http.get<Detail>(this.apiDetail).pipe(
    /*  map(        
        data => {          
          data.produit  = [...data["hydra:member"][0].menus,
          ...data["hydra:member"][1].burgers]
          data.burgers=data["hydra:member"][1].burgers
          data.menus=data["hydra:member"][0].menus
          // console.log(data.produit);
          return data
        }
      ), */
      // tap(data => console.log(data.menu))
    )    
  }
  getIdProduit$ = (id:number) => {
    return this.http.get<Detail>(`${this.apiDetail}/${id}`)
  }
}
