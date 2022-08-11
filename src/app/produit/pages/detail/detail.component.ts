import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { DetailService } from 'src/app/shared/services/detail.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input('') detail! : any | null;  
  object$! : Observable<Produit[]>;
  
  constructor(private detailServ:DetailService,private route : ActivatedRoute,private panierServ :PanierService) { }
  
  ngOnInit(): void {  
    const idProduit = this.route.snapshot.params['id'];
    this.detailServ.getIdProduit$(idProduit).subscribe(
      data => {
        this.detail = data;     
        
        this.object$ = this.panierServ.object$;
        console.log();
      }
    )
    
  }
  
  ajouterProduitAuPanier(prod:Produit) {
    // alert("zefdgh")
    this.panierServ.ajouterAuPanier(prod);
  }
}