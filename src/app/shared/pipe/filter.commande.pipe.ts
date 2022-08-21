import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../models/commande';

@Pipe({
  name: 'FilterCommandePipe'
})
export class FilterCommandePipe implements PipeTransform {

  transform(commandes: Commande[], zoneSearch : string){
    if(!commandes || !zoneSearch){
      return commandes;
    }
    return commandes.filter(commande => commande.zone.nom?.indexOf(zoneSearch)!== -1);
  }

}

@Pipe({
  name: 'FilterCommandeEtatPipe'
})
export class FilterCommandeEtatPipe implements PipeTransform {

  transform(commandes: Commande[], etatSearch : string){
    if(!commandes || !etatSearch){
      return commandes;
    }
    return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(etatSearch.toLowerCase())!== -1);
  }

}
