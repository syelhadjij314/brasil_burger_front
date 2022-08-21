import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private urlLivraison="http://localhost:8000/api/livraisons";
  headers:HttpHeaders;

  constructor(private http:HttpClient) {
    const token = localStorage.getItem('token');
    this.headers= new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  getLivraison():Observable<any>{
    return this.http.get(this.urlLivraison).pipe(
      map(
        (response:any) => response["hydra:member"]
      )
    );
  }
  postLivraison(body: any){
    this.http.post<Livraison>(this.urlLivraison,body,{ headers: this.headers }).subscribe((response) =>
      console.log(response)
    )
  }
  updateLivraison(id:number,body:object){
    this.http.put(this.urlLivraison+"/"+id,body).subscribe()
  }
}
