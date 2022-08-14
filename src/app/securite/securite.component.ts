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
  /* messageClass=''
  message=''
  costumerid: any;
  editdata: any; */
  responsedata: any;

  constructor(private authServ: AuthService,
    private route : Router,
    private commandServ : CommandeService) { }

  user: User= {}

  ngOnInit(): void {
  }
// findLogin(user:User){
//   if (user) {
//     this.authServ.findLogin(this.user).subscribe(result => {      
//       if (result != null) {
//         this.responsedata= result;
//         localStorage.setItem("token",JSON.stringify(result))
//         console.log(user);
        
//        // localStorage.setItem('token',this.responsedata.jwtToken);
//         this.route.navigate(['/produit/commandes'])
//         }else{
//           this.route.navigate(['/login'])
//         }
//       })
//     }
//   }
  findLogin() {
    this.authServ.findLogin(this.user).subscribe((res:any) => {
      if (res['token']) {
        /* res['token'].push({
          "id":res.id
        }) */
        
        localStorage.setItem('token', res['token']);
        let tokenDecode=this.commandServ.getDecodedAccessToken(res['token']);
        console.log(tokenDecode)
        this.route.navigateByUrl('/produit/commandes');
        
      }
      else {
        this.route.navigate(['/login']);
      }
    });
  }
  
}
