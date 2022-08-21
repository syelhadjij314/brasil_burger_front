import { LigneCommande } from "./ligne.commande";
import { Produit } from "./produit";
import { BoissonTaille } from "./boisson.taille";
import { Zone } from "./Zone";
export interface Commande {
    id?:number;
    isEtat?:string;
    zone:Zone,
    client?:{
        id:number,
        nom?:string,
        prenom?:string
    },
    boissons?:[
        {
            "quantite"?: number
            "boissonTaille": {
                "id":number
            }
        }
    ],
    burgers?:[
        {
            "quantite"?: number
            "burger": {
                "id":number
            }
        }
    ],
    frites?:[
        {
            "quantite"?: number
            "frite": {
                "id":number
            }
        }
    ],
    menus?:[
        {
            "quantite"?: number
            "menu": {
                "id":number
            }
        }
    ],
    numeroCommande?:string;
    dateAt?:Date;
    etat?:string;
    montant?:number;
    // produits:LigneCommande[];
    ["hydra:member"]?:[{ }];
}
export interface Icommande{
    "zone"?:Zone,
    "boissons"?: Iligne[],
    "burgers"?:Iligne[],
    "frites"?:Iligne[],
    "menus"?:Iligne[],
    "produits"?:Iligne[]
}
export interface Iligne{
    "quantite"?:number;
    "burger"?:Produit;
    "boissonTaille"?: BoissonTaille;
    "menu"?:Produit;
    "frite"?:Produit;
    "produit"?:Produit

}
