import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/shared/models/detail';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'blog-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent implements OnInit {
  // object$!: Observable<Produit[]>|undefined
  @Input('produits') prod!: Produit;
  @Input() prixCommande:number=this.calculatePriceTotalCommande()
  quantity:any;
  constructor(private panierServ: PanierService) { }

  object$ = this.panierServ.object$
  ngOnInit(): void {
    this.calculatePriceTotalCommande()

    // console.log(this.object$);
  }  
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off");
  }
  calculatePrice(prod:Produit,quantity:any){
    this.panierServ.recupValueQuantity(prod,quantity)
  }
  calculatePriceTotalCommande(){
    return this.prixCommande= this.panierServ.calculatePriceCommande()
  } 
  
}
