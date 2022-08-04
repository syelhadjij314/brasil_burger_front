import { Burger } from "./burger"
import { Menu } from "./menu"
import { Produit } from "./produit"

export interface Detail {
    
    produit: Produit
    boissons: Produit[]
    frites: Produit[]
    // type: Menu | Burger
    
    // myMenu: Produit[]
    // ["hydra:member"]:Produit[]
}