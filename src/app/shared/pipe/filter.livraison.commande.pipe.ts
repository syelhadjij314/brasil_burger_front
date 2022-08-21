import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../models/commande';
import { Zone } from '../models/Zone';

@Pipe({
  name: 'filterLivraisonCommandePipe'
})
export class FilterLivraisonCommandePipe implements PipeTransform {

  transform(commandes: Commande[], zoneSearch : string){
    if(!commandes || !zoneSearch){
      return commandes;
    }
    return commandes.filter(commande => commande.zone.nom?.indexOf(zoneSearch)!== -1);
  }

}
