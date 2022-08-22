import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from 'src/app/gestionnaire/shared/services/lister.service';

@Component({
  selector: 'cas-liste-livraison',
  templateUrl: './liste-livraison.component.html',
  styleUrls: ['./liste-livraison.component.css']
})
export class ListeLivraisonComponent implements OnInit {

  livraisons:any[] = []
  constructor(
    private comService:CommandeService,
    private toast: NgToastService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.comService.livraisonAll().subscribe(data=>{
      // console.log(data)
      this.livraisons = data
      // .filter((livraison:any)=>livraison.etat=="en cours")
    })
  }

   /* fonction changer etat commande */
   CommandetoEdit(id:any,etat:string){
    this.comService.validerLivraison(id,etat) .subscribe(
      data=>{
        console.log(data);
        location.reload()
      }
    );

      this.toast.info({detail:"info",summary:"l etat de la livraison a bien été modifié",sticky:true})
  }

  comLivre():void{
    // /gestionnaire/commande/listeCommande/{{livraison.id}}
    this.router.navigateByUrl(`gestionnaire/commande/commande-livraison`)
  }
}
