export interface LigneCommande
{
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
    ]
}