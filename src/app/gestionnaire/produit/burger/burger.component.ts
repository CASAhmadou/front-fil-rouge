import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   totalLenght:number = 0
//   p: number = 1
//   catas: Produit[]| any = undefined;
//   constructor(
//     private serv:CatalogueStoreService,
//     private produitService:ProduitService,
//     private toast: NgToastService,
//   ) { }

//   ngOnInit(): void {
//     this.serv.all().subscribe(data => {
//       console.log(data.produits);
//       this.catas = data.produits?.filter(product => product.type === 'burger')
//       this.totalLenght = this.catas.length
//     })
//   }
//   /* edit menu */
//   BurgertoEdit(id:string){
//     this.produitService.burgerDelete(id) .subscribe(

//     );
//       this.toast.info({detail:"info",summary:"le menu a bien été supprimé"})
// }
}
