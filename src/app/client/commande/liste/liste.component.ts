
export interface Commande {
  id?:number
  numeroCommande?:string
  dateCommande?:Date
  etat?:string
  montantCommande?:string
}


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Commande } from '../../shared/models/commande';
=======
>>>>>>> bf6d652c79bf72474aa49aa96a8fa6002931c11f
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
<<<<<<< HEAD
  etatSearch:any
  dateSearch:any
=======
>>>>>>> bf6d652c79bf72474aa49aa96a8fa6002931c11f

  constructor(private comService : CommandeService) { }

  ngOnInit(): void {
    this.comService.commandeClient().subscribe(data=>{
<<<<<<< HEAD
      // console.log(data)
=======
      console.log(data)
>>>>>>> bf6d652c79bf72474aa49aa96a8fa6002931c11f
      this.commandes = data
      this.lenghTotal = this.commandes.length
      return data
    })
  }
<<<<<<< HEAD
=======



>>>>>>> bf6d652c79bf72474aa49aa96a8fa6002931c11f
}
