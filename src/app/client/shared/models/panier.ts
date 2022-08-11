import { BoissonTailleBoisson } from "../../shared/models/detail"
import { Produit } from "../../shared/models/produit"

export interface Panier {
  commandeBurgers?: BurgerCommande[]
  commandeMenus?: MenuCommande[]
  commandeBoissons?:CommandeBoisson[]
  commandeFrites?:CommandeFrite[]
}

export interface BurgerCommande{
  burger?: Produit
  quantite:number
}

export interface MenuCommande{
  menu?: Menu
  quantite:number
}

export interface Menu{
  id: number
  nom?:string
  image?:Blob
  type?:string
  prix?:number
  commandeMenuBoissonTailles:CommandeMenuBoissonTaille[]
}

export interface CommandeMenuBoissonTaille{
  quantite?:number
  tailleBoissons?: BoissonTailleBoisson
}

export interface CommandeBoisson{
  quantite?:number
  boissonTailleBoisson?:BoissonTailleBoisson
}

export interface CommandeFrite{
  quantite?:number
  portionFrite?: Produit
}
