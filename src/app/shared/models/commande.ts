import { Produit } from "./produit";

export interface Commande {
    "id":number;
    "zone":Zone;
    "burgers":[Produit:{}];
    "frites":[Produit:{}];
    "boissons":[Produit:{}];
    "menus":[Produit:{}];
    ["hydra:member"]:[{ }];
}
