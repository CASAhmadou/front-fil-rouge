import { Produit } from "./produit";

export interface Catalogue {
  burgers: Produit[]
  menus: Produit[]
  produits?: Produit[]
}
