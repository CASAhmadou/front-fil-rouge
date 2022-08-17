import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../../shared/models/commande';
import { CommandeService } from '../../shared/service/commande.service';

@Component({
  selector: 'cas-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  commandes$: Observable<Commande> | any = null
  lenghTotal: number = 0
  i:number=1
  commandes: any[]=[]

  searchTerm:any
  searchTermDate:any

  constructor(private comService : CommandeService) { }

  ngOnInit(): void {
    this.comService.commandeClient().subscribe(data=>{
      console.log(data)
      this.commandes = data
      this.lenghTotal = this.commandes.length
      return data
    })
  }



}
