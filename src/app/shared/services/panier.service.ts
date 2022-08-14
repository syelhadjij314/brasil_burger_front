import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, take } from 'rxjs'
import { Produit } from '../models/produit'

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private produitSubject = new BehaviorSubject<any[]>([])
  object$: Observable<any[]> = this.produitSubject.asObservable()
  prixTotal:number=0;
  tabCommande:Array<any>=[];

  constructor() {
    let contentCartObject = JSON.parse(localStorage.getItem('produits') || '[]')
    if (!contentCartObject) {
      contentCartObject = []
    }
    this.produitSubject.next(contentCartObject)
  }
  getPanier(){
    return JSON.parse(localStorage.getItem('produits') || '[]')
  }
  ajouterAuPanier(produit: any, action: 'One' | 'off' = 'One') {
    this.object$
      .pipe(
        take(1),
        map((produits) => {
          let tabProduit: Produit[] = JSON.parse(
            localStorage.getItem('produits') || '[]',
          )
          if (action == 'One') {
            if (tabProduit) {
              let objectProduit: Produit | undefined = tabProduit.find(
                (param: { id: number }) => param.id === produit.id,
              )
              if (!objectProduit) {
                produit.qnt = 1
                produits.push(produit)
              } else {
                produits.forEach((elt) => {
                  if (elt.id === produit.id) {
                    produit.qnt++
                  }
                })
              }
            }
          } else {
            produits.splice(produits.indexOf(produit), 1)
          }
          localStorage.setItem('produits', JSON.stringify(produits))
        }),
      )
      .subscribe()
  }

  recupValueQuantity(produit:Produit ,q: any) {
    this.object$.pipe(
      take(1),
      map((produits:any)=>{
        produits.forEach((elt:any) =>{
          if (elt.id === produit.id){
            elt.qnt=q
          }
        })
        localStorage.setItem("produit",JSON.stringify(produits))
      })
    )
    .subscribe();
  }

  calculatePriceCommande(){
    this.object$.pipe(
      map(produits =>{
        produits.forEach(elt =>{
          this.prixTotal += elt.prix*elt.qnt
        })
        localStorage.setItem('produit',JSON.stringify(produits))
      })
      ).subscribe();
      return this.prixTotal
  }

  CommandeOperation(){
    this.object$.pipe(
      map((produits:any) =>{
        produits.forEach((produit:any) =>{
          this.tabCommande.push({
            'prod':produit,
            'quantite':produit.qnt
          })
        })
      })
    )
    return this.tabCommande;
  }
}
