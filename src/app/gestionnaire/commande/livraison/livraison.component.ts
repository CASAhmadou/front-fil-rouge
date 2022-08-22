import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from '../../shared/services/lister.service';

@Component({
  selector: 'cas-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  commandesZones :any[] = []
  commandesZones2 :any[] = []
  commandesZones3 :any[] = []
  commandesZones4 :any[] = []
  commandesAll :any[] = []

  livreurs: any[] = []

  ouvertPanel = true;
  ouvertPanel2 = true;
  ouvertPanel3 = true;
  ouvertPanel4 = true;

  registerForm:any

  constructor(private comService:CommandeService,private fb:FormBuilder,private toast: NgToastService,private router:Router) { }

  ngOnInit(): void {

    this.comService.commandesZone(1).subscribe(data=>{
      this.commandesZones = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comService.commandesZone(2).subscribe(data=>{
      this.commandesZones2 = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comService.commandesZone(3).subscribe(data=>{
      this.commandesZones3 = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comService.commandesZone(4).subscribe(data=>{
      this.commandesZones4 = data.filter((commande:any) => commande.etat=="termine")
    })

    this.comService.livreurAll().subscribe(data=>{
      this.livreurs=data.filter((livreur:any)=> livreur?.etat=="disponible")
      // console.log(this.livreurs)

    })

    /* form */
    this.registerForm = this.fb.group({
      "commandes": this.fb.array([]),
      "livreur":[null,[Validators.required]],
    })
  }

  /* formulaire */
  submitData(){
    this.registerForm.value.livreur = {id:Number(this.livreur.value)}
    // console.log(this.registerForm.value)

    /* enregistrer livraison */
    this.comService.ajoutLivraison(this.registerForm.value).subscribe(
      err=>{
        console.log(err)
      },
    )
    this.toast.success({detail:"success",summary:"le menu a bien été enregistré",duration:3000})
  }

  get commandes() {
    return this.registerForm.controls["commandes"] as FormArray;
  }
  get livreur(){
    return this.registerForm.get('livreur')
  }
  get id(){
    return this.registerForm.get('id')
  }
  /* function onChange */
  onChange(id:string, event: any) {
    const checkFormArray = <FormArray>this.registerForm.controls.commandes;
    let isChecked = event.target.checked
    if(isChecked) {
      const test = this.fb.group({
        "id":id
      })
      checkFormArray.push(test);
    } else {
      let index = checkFormArray.controls.findIndex(x => x.value == id)
      checkFormArray.removeAt(index);
    }
  }

  livraison():void{
    this.router.navigateByUrl(`gestionnaire/commande/liste-livraison`)
  }

}
