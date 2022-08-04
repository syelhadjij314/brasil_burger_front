import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/shared/services/detail.service';
import { Produit } from '../../../shared/models/produit';

@Component({
  selector: 'blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail! : any | null;
  isMenu! : boolean;
  constructor(private detailServ:DetailService,private route : ActivatedRoute) { }
  @Input('') prod! : Produit;

  ngOnInit(): void {
  
    const idProduit = this.route.snapshot.params['id'];
    this.detailServ.getIdProduit$(idProduit).subscribe(
      data => {
        this.detail = data;
      }
    )
  }
}