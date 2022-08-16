import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'blog-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent implements OnInit {
  responsedata: any;

  constructor(private authServ: AuthService,
    private route : Router,
    private commandServ : CommandeService) { }

  user: User= {}

  ngOnInit(): void {
  }

  findLogin() {
    this.authServ.findLogin(this.user).subscribe((res:any) => {
      if (res['token']) {        
        localStorage.setItem('id',res['id'])
        localStorage.setItem('token',res['token']);
        this.commandServ.getDecodedAccessToken(res['token']);        
        this.route.navigateByUrl('/produit/commandes');        
      }
      else {
        this.route.navigate(['/login']);
      }
    });
  }
  
}
