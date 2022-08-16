import { Boisson } from "./boisson";
import { Menu } from "./menu";

export interface Produit {
    id:number,
    nom:string,
    prix:number,
    image:Blob,
    ["@type"]: Menu | Boisson,
    boissons?:[]
    burgers?:[],
    frites?:[],
    qnt?:number,
    produits?:[],
}
export interface Ipanier{
    
        "zone": {
         id:number
        },
        "boissons": [
          {
            "quantite": 5,
            "boissonTaille": {
              "id":1
            }
          }
        ],
        "burgers": [
          {
            "quantite": 2,
            "burger": {
              "id":2
              
            }
          }
        ],
        "frites": [
          {
            "quantite": 4,
            "frite": {
              "id":3
              
            }
          }
        ],
        "menus": [
          {
            "quantite": 3,
            "menu": {
              "id":25
              }
          }
        ]
      
}

