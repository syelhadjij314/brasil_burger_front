import { Commande } from "./commande";

export interface Zone{
    id: number;
    nom?: string;
    prix?: number,
    quartier?:[],
    commandes?:Commande[];
    ["hydra:member"]?: Zone[]
}