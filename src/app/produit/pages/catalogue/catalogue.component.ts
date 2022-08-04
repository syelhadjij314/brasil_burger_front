import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';

@Component({
  selector: 'blog-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  produit! : Produit[]|undefined;
  produits! : Catalogue|null;
  constructor(private catalogueServ:CatalogueService) { }

  ngOnInit(): void {
    this.catalogueServ.getCatalogue().subscribe(
      (data) => {
        console.log(data);
        this.produits = data;
        this.produit = this.produits.produit
      }
    )    
  }
  showProduits(option:string){
    // alert(option)
    option == "burgers" ? 
      this.produit = this.produits?.burgers :
        this.produit= this.produits?.menus
    
  }


}
