import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from '../shared/services/lister.service';

@Component({
  selector: 'cas-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  totalLenght:any
  p: number = 1

  commandes : any[] = []

  etat:string=""

  searchTerm = "en cours"
  searchTermDate = ''
  searchTermZone:any
  searchTermClient:any

  constructor(private com:CommandeService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.com.allCommande().subscribe(data=>{
      // console.log(data)
      this.commandes = data
      this.totalLenght = this.commandes.length
    })
  }

    /* fonction changer etat commande */
    editCommande(id:any,etat:string){
      this.com.resetCommande(id,etat) .subscribe();
        this.toast.info({detail:"info",summary:"le commande a bien été modifié"})
        location.reload()
    }

}
