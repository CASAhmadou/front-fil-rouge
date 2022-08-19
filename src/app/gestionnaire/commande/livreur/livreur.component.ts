import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from '../../shared/services/lister.service';

@Component({
  selector: 'cas-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  registerForm:any
  constructor(
    private fb:FormBuilder,
    private comServ:CommandeService,
    private toast: NgToastService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      "nom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "prenom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "telephone":new FormControl(null),
      "login":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required]),
      "matriculeMoto":[null,[Validators.required]],

    })
  }


  get nom(){
    return this.registerForm.get('nom')
  }
  get prenom(){
    return this.registerForm.get('prenom')
  }
  get login(){
    return this.registerForm.get('login')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get matricule(){
    return this.registerForm.get('matricule')
  }
  get telephone(){
    return this.registerForm.get('telephone')
  }


  submitData(){
      // console.log(this.registerForm.value)
    this.comServ.addLivreur(this.registerForm.value).subscribe(
      err=>console.log("Error: " + err),
    )
    this.toast.success({detail:"success",summary:"le livreur a bien été enregistré"})
  }

}
