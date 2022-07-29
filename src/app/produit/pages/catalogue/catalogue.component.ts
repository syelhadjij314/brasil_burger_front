import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';

@Component({
  selector: 'blog-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  produits$ : Observable <Catalogue>|null = null;
  produits:Catalogue|null=null;
  constructor(private catalogueServ:CatalogueService) { }

  ngOnInit(): void {
    this.catalogueServ.getCatalogue().subscribe((data) => this.produits = data)
    this.produits$ = this.catalogueServ.getCatalogue();
    // console.log(this.produits$);
    
  }

}
