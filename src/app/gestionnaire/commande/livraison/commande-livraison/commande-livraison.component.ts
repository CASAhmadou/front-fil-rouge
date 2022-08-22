import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from 'src/app/gestionnaire/shared/services/lister.service';

@Component({
  selector: 'cas-commande-livraison',
  templateUrl: './commande-livraison.component.html',
  styleUrls: ['./commande-livraison.component.css']
})
export class CommandeLivraisonComponent implements OnInit {
id:any
p:number=1
// lenghTotal:number=0
comLivraisons:any[]=[]
  constructor(private comService: CommandeService, private route: ActivatedRoute, private toast: NgToastService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id'),
    this.comService.commandeByLivraison(this.id).subscribe((data:any)=>{
      this.comLivraisons = data
      console.log(this.comLivraisons)
      // this.comService.commandeByLivraison().subscribe(data=>{
      // this.lenghTotal=this.comLiv.length
      // console.log(this.lenghTotal)
    })
  }
}
