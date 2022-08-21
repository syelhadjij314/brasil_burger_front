import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/app/shared/models/livraison';
import { LivraisonService } from 'src/app/shared/services/livraison.service';

@Component({
  selector: 'blog-liste-livraison',
  templateUrl: './liste-livraison.component.html',
  styleUrls: ['./liste-livraison.component.css']
})
export class ListeLivraisonComponent implements OnInit {
  livraisons!: any;
  constructor(private livraisonServ:LivraisonService) { }

  ngOnInit(): void {
    this.livraisonServ.getLivraison().subscribe(livraison =>{
      this.livraisons=livraison;
      console.log(livraison[7].commandes);
      
    })
  }

}
