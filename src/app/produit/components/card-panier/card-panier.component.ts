import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private panierServ: PanierService) { }

  object$ = this.panierServ.object$
  ngOnInit(): void {
    // console.log(this.object$);

  }
  
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off");
  }
}
