import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Detail } from 'src/app/shared/models/detail';
import { DetailService } from 'src/app/shared/services/detail.service';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Produit } from '../../../shared/models/produit';

@Component({
  selector: 'blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail! : Detail|null;
  constructor(private detailServ:DetailService,private route : ActivatedRoute) { }
  @Input('') prod! : Produit;

  ngOnInit(): void {
    const idProduit = this.route.snapshot.params['id'];
    this.detailServ.getIdProduit$(idProduit).subscribe(
      data => {
        this.detail = data;
        // console.log(data.burger)
        if (data.burger) {
          this.prod = this.detail.burger;
        }else{
          this.prod = this.detail.menu;
        }
        
      }
    )
  }
}