import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/shared/models/commande';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

@Component({
  selector: 'blog-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  @Input() mesCommandes!:any;
  @Input() mesZones!:any;
  // searchText:string = this.commandServ.dateFiltre();
  searchText:string="";
  zoneSearch:string="";
  etatSearch:string="";

  user: User= {};
  loginToken = localStorage.getItem('token') || '';
  idUserConnected = localStorage.getItem('id') || '';
  tokenDecode:any;
  constructor(
    private commandServ : CommandeService,
    private userServ:UserService,
    private zoneServ:ZoneService,
    ) { }

  ngOnInit(): void {
    this.tokenDecode = this.commandServ.getDecodedAccessToken(this.loginToken)
    console.log(this.tokenDecode.roles);
    if (this.tokenDecode.roles[1]=='ROLE_CLIENT') {            
      this.userServ.getCommandesClient(this.idUserConnected).subscribe(commands =>{
        this.mesCommandes=commands
      })    
    }else{
      this.commandServ.getCommande().subscribe(commands =>{        
        this.mesCommandes=commands
      }) 
    }
    this.zoneServ.getZone().subscribe(zones =>
      {
        this.mesZones= zones
      }      
    )        
  }
  annullerCommande(id:any){  
    this.commandServ.updateCommande(id,{etat:"annuler"})  
  }
  validerCommande(id:any){  
    this.commandServ.updateCommande(id,{etat:"valider"})  
  }
  zoneFilter(optionZone:any){
    this.searchText = optionZone.value 
    
  }    
    
}
