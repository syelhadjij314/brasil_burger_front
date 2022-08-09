import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'blog-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  // produit! : Produit|undefined|null;
  @Input('produits') prod!:Produit|null|undefined;
  constructor(private panierServ : PanierService) { }

  object$ = this.panierServ.object$
  ngOnInit(): void {
    // console.log(this.object$);
    
  }
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off");
  }

}
