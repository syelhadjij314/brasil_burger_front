import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitService } from 'src/app/shared/services/produit.service';
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  posts$ : Observable<Produit[]> | null = null;
  constructor(private serv:ProduitService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();

  }
}
