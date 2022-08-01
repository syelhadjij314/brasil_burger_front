import { Produit } from "./produit"

export interface Complement {
    boissons:Produit[]
    frites:Produit[]
    complement:Produit[]
    ["hydra:member"]:Produit[]
}