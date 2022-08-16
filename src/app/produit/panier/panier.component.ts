import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commande } from 'src/app/shared/models/commande';
import { LigneCommande } from 'src/app/shared/models/ligne.commande';
import { Produit } from 'src/app/shared/models/produit';
import { CommandeService } from 'src/app/shared/services/commande.service';
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
  produits:LigneCommande[]=[]
  prixCommande:number=this.calculatePriceTotalCommande();
  constructor(private panierServ : PanierService
    , private zoneServ: ZoneService,
    private commandeServ: CommandeService) { 
      
    }

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
    alert("zs")
    this.showZone="d-block"
  }
  calculatePrice(produit:Produit,qnt:any){
    this.panierServ.recupValueQuantity(produit,qnt)
  }
  calculatePriceTotalCommande(){
    return this.prixCommande=this.panierServ.calculatePriceCommande()
  }
  CommandeOperation():LigneCommande[]{
    let produits=this.panierServ.getPanier();
    let commandes: LigneCommande[]=[];
    produits.forEach((produit:Produit)=>{
      if (produit['@type']=="Menu") {
        commandes.push({
          menus:[
            {
                "quantite": produit.qnt,
                "menu": {
                    "id":produit.id
                }
            }
          ],
        })
      }
      if (produit['@type']=="Burger") {
        commandes.push({
          burgers:[
            {
                "quantite": produit.qnt,
                "burger": {
                    "id":produit.id,
                }
            }
          ],
        })
      }
      if (produit['@type']=="BoissonTaille"){

        commandes.push({
          boissons:[
            {
              "quantite": produit.qnt,
              "boissonTaille": {
                id: produit.id,                 
              }
            }
          ],   
        })
      }
      if (produit['@type']=="Frite"){
        commandes.push({
          frites:[
            {
              "quantite": produit.qnt,
              "frite": {
                id: produit.id,                
              }
            }
          ],   
        })
      }
      // console.log(produit);    
    })
    return commandes;
  }
  sendCommande(){
    alert("OK")
    this.produits = this.CommandeOperation()
    let body:Commande ={
      menus:this.produits[0].menus,
      burgers:this.produits[1].burgers,
      boissons:this.produits[2].boissons,
      frites:this.produits[3].frites,

      zone:{
        id:3
      },
      client:{
        id:2
      }
    }
    console.log(this.produits);    
    this.commandeServ.postCommande(body);
    
  }    

}
