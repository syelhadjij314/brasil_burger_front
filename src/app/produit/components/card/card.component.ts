import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('produits') prod! : Produit;
  constructor(private route : Router) { }
  ngOnInit(): void {
    
  }
  RecupObject(){
    return this.route.navigateByUrl(`/produit/detail/${this.prod.id}`)
  }

}
