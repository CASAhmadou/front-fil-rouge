import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-ajout-burger',
  templateUrl: './ajout-burger.component.html',
  styleUrls: ['./ajout-burger.component.css']
})
export class AjoutBurgerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   registerForm:any
//   constructor(
//     private fb:FormBuilder,
//     private produitServ:ProduitService,
//     private toast: NgToastService,
//   ) { }



//   ngOnInit(): void {

//     this.registerForm = this.fb.group({
//       "nom":[null,[Validators.required]],
//       "imageBlob":[null],
//       "description":[null,[Validators.required]],
//       "prix":[null,[Validators.required]],
//     })
//   }

//   submitData(){
//     var formData: any = new FormData();

//     formData.append('nom', this.registerForm.get('nom').value);
//     formData.append('imageBlob',this.registerForm.get('imageBlob').value);
//     formData.append('description', this.registerForm.get('description').value);
//     formData.append('prix', this.registerForm.get('prix').value)
//     this.produitServ.addBurger(formData).subscribe(
//       err=>{
//         console.log(err)
//       },
//     )
//     this.toast.success({detail:"success",summary:"le burger a bien été enregistré"})
//   }

//   get nom(){
//     return this.registerForm.get('nom')
//   }
//   get imageBlob(){
//     return this.registerForm.get('imageBlob')
//   }
//   get description(){
//     return this.registerForm.get('description')
//   }
//   get prix(){
//     return this.registerForm.get('prix')
//   }

//      // on file select event
//      onFileChange(event:any) {
//       if (event.target.files.length > 0) {
//         const file = event.target.files[0];
//         this.registerForm.patchValue({
//             imageBlob: file
//         });
//       }
// }
}
