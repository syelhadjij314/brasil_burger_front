import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icommande, Iligne } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class Panier2Service {
  object : {
    [key: string] : []
  }={}
$panier2:BehaviorSubject<Icommande> = new BehaviorSubject({});
  constructor() { }
  addProduit(iligne:Iligne,type : string){
    
  }

}
