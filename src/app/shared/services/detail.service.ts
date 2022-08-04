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
  /* getDetail():Observable<any> {
    return this.http.get<any>(this.apiDetail)
  } */
  getIdProduit$ = (id:number) => {
    return this.http.get<any>(`${this.apiDetail}/${id}`)
  }
}
