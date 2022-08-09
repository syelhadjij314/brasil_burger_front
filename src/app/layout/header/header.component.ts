import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitService } from 'src/app/shared/services/produit.service';
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  posts$ : Observable<Produit[]> | null = null;
  object$! : Observable<Produit[]>;

  constructor(private serv:ProduitService,private panierServ: PanierService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
    this.object$ = this.panierServ.object$;

  }
}
