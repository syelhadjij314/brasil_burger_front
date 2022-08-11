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
  zone$!: any;
  constructor(private panierServ : PanierService, private zoneServ: ZoneService) { }

  object$ = this.panierServ.object$
  ngOnInit(): void {
    this.zoneServ.getZone().subscribe(
      data => {
        this.zone$=data;
        
        console.log(this.zone$);        
      }
    )
    // this.panierServ.choiceZone(this.option);
    // console.log(this.object$);
    
  }
  supprimerProduitAuPanier(prod:Produit) {
    this.panierServ.ajouterAuPanier(prod,"off");
  }

  choiceZone(option:string){
    option == "livraison" ? this.zone$ :
    alert("a emporter")
  }

}
