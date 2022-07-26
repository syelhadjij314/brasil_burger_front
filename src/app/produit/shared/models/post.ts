export interface Post {
    id?:number
    titre:string
    image:string
    date:string
    categories?: Array<string>
    description:string
}
