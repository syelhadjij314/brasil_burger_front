import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterCommandeService {

  private urlCommandeFilterZone="http://localhost:8000/api/commandes?zone.nom"
  constructor() { }
}
