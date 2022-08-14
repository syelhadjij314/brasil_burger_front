import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

@Component({
  selector: 'blog-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  // produit! : Produit|undefined|null;
  @Input('produits') prod!:Produit|null|undefined;
  @Input() mesZones!: Zone| null|undefined ;
  option!:string;
  zone$:any []=[];
  showZone:string ="d-none";
  prixCommande:number=this.calculatePriceTotalCommande();
  constructor(private panierServ : PanierService
    , private zoneServ: ZoneService) { }

  object$ = this.panierServ.object$
  ngOnInit(): void {
    this.zoneServ.getZone().subscribe(
      data => {
        this.zone$=data;   
      }
    )
  }
    
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off");
  }

  showZones(){
    this.showZone="d-block"
  }
  calculatePrice(produit:Produit,qnt:any){
    this.panierServ.recupValueQuantity(produit,qnt)
  }
  calculatePriceTotalCommande(){
    return this.prixCommande=this.panierServ.calculatePriceCommande()
  }
  /* CommandeOperation(){
    let commandes=this.panierServ.getPanier();
    const produits: Produit[]=[];
    commandes.forEach((produit:Produit)=>{
      produits.push({
        qnt: produit.qnt
        produit: produit.id
      })
    })
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
  }     */

}
