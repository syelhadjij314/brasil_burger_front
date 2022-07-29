import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Produit } from '../../../shared/models/produit';

@Component({
  selector: 'blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // produits$ : Observable<Produit>|null=null;
  constructor(private serv:ProduitService,private route : ActivatedRoute) { }
  @Input('') prod! : Produit;

  ngOnInit(): void {
    const idProduit = this.route.snapshot.params['id'];
    this.serv.produitId$(idProduit).subscribe(
      produit => {
        console.log(produit)
        this.prod = produit
    }
    // this.prod= this.serv.produitId$(idProduit);
    )
    // this.serv.getImage(this.image)
  }
}