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
  responseData:any;
  loginToken = localStorage.getItem('token') || '';
  constructor(private commandServ : CommandeService,
    private userServ:UserService,
    private authServ:AuthService,
    private route:Router
    ) { }
  user: User= {}

  ngOnInit(): void {
    
    let tokenDecode = this.commandServ.getDecodedAccessToken(this.loginToken)
    this.userServ.getCommandesClient(2).subscribe(commands =>{ 
      this.mesCommandes=commands
    })    
  }
      
    
}
