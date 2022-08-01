import { Produit } from "./produit"

export interface Detail {
    burger:Produit
    menu:Produit
    boissons:Produit[]
    frites:Produit[]
    myMenu:Produit[]
    // ["hydra:member"]:Produit[]
}