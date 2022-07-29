import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  getProduits(idProduit: any): Observable<Produit> {
    throw new Error('Method not implemented.');
  }
  getProduit(idProduit: any): Produit {
    throw new Error('Method not implemented.');
  }
  getProduitById(idProduit: any): any {
    throw new Error('Method not implemented.');
  }

  private url:string = "http://localhost:8000/api/produits";
  // private burgerUrl:string= this.url + "burgers";
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { }

  all():Observable <Produit[]> {     
    return this.http.get<Produit[]>(this.url)
    
  }
  
  produitId$ = (id:number) => {
    return this.http.get<Produit>(`${this.url}/${id}`)
  }

  getImage(imageBlop :string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+ imageBlop);
  }
  
}
