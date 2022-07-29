import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';
import { ProduitService } from '../../../shared/services/produit.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  produits$ : Observable <Catalogue>|null = null;
  produits:Catalogue|null=null;
  constructor(private catalogueServ:CatalogueService) { }

  ngOnInit(): void {
    this.catalogueServ.getCatalogue().subscribe((data) => this.produits = data)
    this.produits$ = this.catalogueServ.getCatalogue();
    
  }
  showBurgers(){
    
  }
}
