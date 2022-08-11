export interface Zone{
    "id": number,
    "nom": string,
    "prix": number,
    "quartier":[],
    ["hydra:member"]: Zone[]
}