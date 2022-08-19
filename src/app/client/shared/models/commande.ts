
export interface Commande {
  id?:number
  numeroCommande?:string
  dateCommande?:Date
  etat?:string
  montantCommande?:string
  client?:User
  zone?:Zone
}

export interface User{
  id?:number
  nom?:string
  prenom?:string
  login?:string
}

export interface Zone{
  id?:number
  libelle?:string
}
