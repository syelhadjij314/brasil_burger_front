import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/shared/models/commande';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'blog-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  @Input() mesCommandes!:any;
  searchText:string="";
  user: User= {}
  loginToken = localStorage.getItem('token') || '';
  idUserConnected = localStorage.getItem('id') || '';
  tokenDecode:any;
  constructor(private commandServ : CommandeService,
    private userServ:UserService,
    private authServ:AuthService,
    private route:Router
    ) { }

  ngOnInit(): void {
    // console.log(this.idUserConnected)   
    this.tokenDecode = this.commandServ.getDecodedAccessToken(this.loginToken)
    if (this.tokenDecode.roles[1]=='ROLE_CLIENT') {        
      this.userServ.getCommandesClient(this.idUserConnected).subscribe(commands =>{
        this.mesCommandes=commands
      })    
    }else{
      this.commandServ.getCommande().subscribe(commands =>{        
        this.mesCommandes=commands
      }) 
    }

      
      
    
  }
      
    
}
