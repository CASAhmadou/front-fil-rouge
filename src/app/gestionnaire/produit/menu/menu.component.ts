import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Produit } from 'src/app/client/shared/models/produit';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'cas-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // totalLenght:number = 0
  // p: number = 1
  // catas: Produit[]| any = undefined;
  // constructor(
  //   private serv:tokenLoginService,
  //   private produitService:ProduitService,
  //   private toast: NgToastService,
  //   ) { }

  // ngOnInit(): void {
  //   this.serv.all().subscribe(data => {
  //     console.log(data.produits);
  //     this.catas = data.produits?.filter(product => product.type === 'menu')
  //     this.totalLenght = this.catas.length
  //   })
  // }

  // /* edit menu */
  // MenutoEdit(id:string){
  //   this.produitService.menuDelete(id) .subscribe();
  //   this.toast.info({detail:"info",summary:"le menu a bien été supprimé"})
  //   location.reload()
  // }
}
