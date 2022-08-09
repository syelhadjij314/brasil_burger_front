import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private produitSubject = new BehaviorSubject<any[]>([]);
  object$: Observable<any[]> = this.produitSubject.asObservable();

  constructor() { 
    let contentCartObject = JSON.parse(localStorage.getItem('produits') || '[]');
    if (!contentCartObject) {
      contentCartObject = [];
    }
    this.produitSubject.next(contentCartObject);
  }
  ajouterAuPanier(produit: any, action:"One" | "off" = "One") {
    this.object$.pipe(
      take(1),
      map((produits) => {
        let tabProduit:Produit[]= JSON.parse(localStorage.getItem('produits') || '[]');
        if (action == "One") {
          if (tabProduit) {            
            let objectProduit: Produit | undefined = tabProduit.find((param: {id : number}) => param.id === produit.id)
            if (!objectProduit){
              produit.qnt = 1;
              produits.push(produit);
            }else{
              produits.forEach( elt => {
                if(elt.id == produit.id){
                  produit.qnt++;
                }                
              })
            }
          }          
        }else {
          produits.splice(produits.indexOf(produit),1)
          }
        localStorage.setItem('produits', JSON.stringify(produits));
      }),
    ).subscribe();
  }
}
