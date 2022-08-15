import { LigneCommande } from "./ligne.commande";
import { Produit } from "./produit";
export interface Commande {
    id?:number;
    zone:{
        id:number,
    },
    client?:{
        id:number,
    },
    produits:LigneCommande[];
    ["hydra:member"]?:[{ }];
}
