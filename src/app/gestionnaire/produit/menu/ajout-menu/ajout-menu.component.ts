import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-ajout-menu',
  templateUrl: './ajout-menu.component.html',
  styleUrls: ['./ajout-menu.component.css']
})
export class AjoutMenuComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // /* accordion */
  // panleExpanded = true;
  // panleExpanded2 = true;
  // panleExpanded3 = true;

  // /*form*/
  // registerForm:any

  // /* liste burgers */
  // catas: Produit[]| any = undefined;
  // frites: Produit[]| any = undefined;
  // tailles: any[] = [];

  // constructor(
  //   private serv:CatalogueStoreService,
  //    private produitServ:ProduitService,
  //    private fb:FormBuilder,
  //    private toast: NgToastService,
  //    ) { }

  // ngOnInit(): void {

  //   this.serv.all().subscribe(data => {
  //     //console.log(data.produits);
  //     this.catas = data.produits?.filter(product => product.type === 'burger')
  //   })

  //   this.produitServ.allFrites().subscribe(data2 =>{
  //     //console.log(data2)
  //     this.frites = data2
  //   } )
  //   this.produitServ.allTaille().subscribe(data3 =>{
  //     //console.log(data3)
  //     this.tailles = data3
  //   } )
  //   this.registerForm = this.fb.group({
  //     "nom":[null,[Validators.required]],
  //     "imageBlob":[null],
  //     "description":[null,[Validators.required]],
  //     menuBurgers: this.fb.array([
  //       this.fb.group({
  //         "burger":[null,[Validators.required]],
  //         "quantite":[null,[Validators.required]],
  //       })
  //     ]),
  //     menuTailleBoissons:this.fb.array([
  //       this.fb.group({
  //         "tailleBoisson":[null],
  //         "quantite":[null],
  //       })
  //     ]),
  //     menuPortionFrites:this.fb.array([
  //       this.fb.group({
  //         "portionFrite":[null],
  //         "quantite":[null],
  //       })
  //     ]),
  //   }
  //   )
  // }

  // /*form*/

  // submitData(){
  //   this.registerForm.value.menuBurgers.map((data:any)=>{
  //       data.burger = {id:Number(data.burger)}
  //   })
  //   this.registerForm.value.menuTailleBoissons.map((data:any)=>{
  //       data.tailleBoisson = {id:Number(data.tailleBoisson)}
  //   })
  //   this.registerForm.value.menuPortionFrites.map((data:any)=>{
  //     data.portionFrite = {id:Number(data.portionFrite)}
  //   })
  //   var formData: any = new FormData();

  //   formData.append('nom', this.registerForm.get('nom').value);
  //   formData.append('imageBlob',this.registerForm.get('imageBlob').value);
  //   formData.append('description', this.registerForm.get('description').value);
  //   formData.append('menuBurgers',JSON.stringify(this.registerForm.get('menuBurgers').value));
  //   formData.append('menuTailleBoissons',JSON.stringify(this.registerForm.get('menuTailleBoissons').value));
  //   formData.append('menuPortionFrites',JSON.stringify(this.registerForm.get('menuPortionFrites').value));
  //   formData.append('prix',0)
  //   console.log(this.registerForm.value)

  //   this.produitServ.addMenu(formData).subscribe(
  //     err=>{
  //       console.log(err)
  //     },
  //   )
  //   this.toast.success({detail:"success",summary:"le menu a bien été enregistré"})

  // }

  // get nom(){
  //   return this.registerForm.get('nom')
  // }
  // get imageBlob(){
  //   return this.registerForm.get('imageBlob')
  // }
  // get description(){
  //   return this.registerForm.get('description')
  // }

  // get menuBurgers() {
  //   return this.registerForm.controls["menuBurgers"] as FormArray;
  // }
  // get menuTailleBoissons() {
  //   return this.registerForm.controls["menuTailleBoissons"] as FormArray;
  // }
  // get menuPortionFrites() {
  //   return this.registerForm.controls["menuPortionFrites"] as FormArray;
  // }

  // /* generer champ  */

  // addBurger(){
  //   const burgerForm = this.fb.group({
  //     "burger":[null,[Validators.required]],
  //     "quantite":[null,[Validators.required]],
  //   });
  //   this.menuBurgers.push(burgerForm);
  // }
  // addTaille(){
  //   const TailleForm = this.fb.group({
  //     "tailleBoisson":[null],
  //     "quantite":[null],
  //   })
  //   this.menuTailleBoissons.push(TailleForm);
  // };
  // addFrites(){
  //   const FriteForm = this.fb.group({
  //     "portionFrite":[null],
  //     "quantite":[null],
  //   })
  //   this.menuPortionFrites.push(FriteForm);
  // };

  // deleteBurger(lessonIndex: number) {
  //   this.menuBurgers.removeAt(lessonIndex);
  // }
  // deleteTaille(lessonIndex: number) {
  //   this.menuTailleBoissons.removeAt(lessonIndex)
  // }
  // deleteFrite(lessonIndex: number) {
  //   this.menuPortionFrites.removeAt(lessonIndex)
  // }

  //  // on file select event
  //  onFileChange(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.registerForm.patchValue({
  //         imageBlob: file
  //     });
  //   }

}
