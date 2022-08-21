import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Commande } from 'src/app/shared/models/commande';
import { Livraison } from 'src/app/shared/models/livraison';
import { User } from 'src/app/shared/models/user';
import { Zone } from 'src/app/shared/models/Zone';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { LivraisonService } from 'src/app/shared/services/livraison.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

@Component({
  selector: 'blog-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  @Input() zones!:any;
  @Input() users!:any[];
  mesCommandes!:any;
  headers: HttpHeaders;
  tabZone:any[]=[];
  tabCommande:any[]=[];
  user:any;
  idLivreur!:number;
  zoneSearch:string="";
  commande!:Commande
  check!: HTMLInputElement
  livreur!:User

  constructor(private zoneServ:ZoneService,
    private userServ:UserService,
    private livraisonServ:LivraisonService,
    private commandServ:CommandeService) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  ngOnInit(): void {
    this.zoneServ.getZone().subscribe((zone:Zone) =>
      {          
        this.zones= zone        
        console.log(zone);
                
      }      
    )
    this.zoneServ.getLivreur().subscribe(user =>
      {
        this.users= user   
      }      
    )
    this.commandServ.getCommande().subscribe(commands =>
      {        
      this.mesCommandes=commands
      }
    )
  } 
  recupInputChecked(commande:Commande ,check: HTMLInputElement){
    if (check.checked) {
      this.tabCommande.push(commande)
    }else{
      this.tabCommande.splice(this.tabCommande.indexOf(commande),1)
    }// console.log(this.tabCommande);
  }
  recupLivreur(livreur:any){
    // alert("dsdsbj:kv")
    this.user=livreur.value;
    // console.log(this.user);  
  }
  sendLivraison(){
    let tab:any[]=[];
    this.tabCommande.forEach((com:any)=>{
      tab.push(
        {
          "id":com.id
        }
      );
    })
    let body:Livraison={
      commandes:tab,
      livreur:{
        "id":this.user
      }    
    }
    // console.log(body);
    this.livraisonServ.postLivraison(body)
  }

}
