import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('produits') prod! : Produit;
  // produit! : Produit;
  object$! : Observable<Produit[]>;

  constructor(private route : Router,private panierServ: PanierService) { }
  ngOnInit(): void {
    this.object$ = this.panierServ.object$;

  }
  RecupObject(){
    return this.route.navigateByUrl(`/produit/detail/${this.prod.id}`)
  }
  ajouterProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod);
  }

}
