import { BurgerMenu } from "./burgerMenu"
import { FriteMenu } from "./friteMenu"

export interface Detail{
    id?:number
    nom?:string
    prix?:number
    etat?:string
    description?:string
    image?:Blob
    catalogue?:string
    menuBurgers?:BurgerMenu[]
    menuPortionFrites?:FriteMenu[]
    menuTailleBoissons?:[]
}
