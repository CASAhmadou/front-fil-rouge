import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuCommande, Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: Panier = {
    commandeBurgers: [],
    commandeMenus: [],
    commandeBoissons: [],
    commandeFrites: []

  }

  newCart = new BehaviorSubject<Panier>(this.panier)

  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
   if (ls) {
     this.newCart.next(ls)
   }
 }


 ajoutMenu(menuCommande:MenuCommande) {
  var valide=false
  this.newCart.value.commandeMenus?.map(comMenu=>{
    if(comMenu.menu?.id == menuCommande.menu?.id){
        valide = true
        Number(comMenu.quantite += menuCommande.quantite)
    }
  })
  if(!valide){
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
      ...this.newCart.value,
      commandeMenus: this.newCart.value.commandeMenus?.concat(menuCommande)
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.newCart.next(newData)
  }
  else{
     const ls = JSON.parse(localStorage.getItem('cart') || 'null')
     let newData = {
      ...this.newCart.value,
      commandeMenus: this.newCart.value.commandeMenus
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.newCart.next(newData)
  }

}
}
































//   export class CartService {
//   constructor() {
//     let existingCartItems = JSON.parse(localStorage.getItem('products'));
//     if (!existingCartItems) {
//       existingCartItems = [];
//     }
//     this.itemsSubject.next(existingCartItems);
//   }

//   private itemsSubject = new BehaviorSubject<Product[]>([]);
//   items$ = this.itemsSubject.asObservable();

//   addToCart(product: Product) {
//     this.items$.pipe(
//       take(1),
//       map((products) => {
//         products.push(product);
//         localStorage.setItem('products', JSON.stringify(products));
//       }),
//     ).subscribe();
//   }

// }
