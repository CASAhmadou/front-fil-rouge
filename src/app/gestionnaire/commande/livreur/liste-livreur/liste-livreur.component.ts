import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/gestionnaire/shared/services/lister.service';

@Component({
  selector: 'cas-liste-livreur',
  templateUrl: './liste-livreur.component.html',
  styleUrls: ['./liste-livreur.component.css']
})
export class ListeLivreurComponent implements OnInit {

  livreurs:any[] = []
  constructor(private com:CommandeService, private router:Router) { }

  ngOnInit(): void {
    this.com.allLivreur().subscribe((data:any)=>{
      this.livreurs = data
    })
  }

  newLivreur():void{
    this.router.navigateByUrl(`gestionnaire/commande/nouveau-livreur`)
  }

}
