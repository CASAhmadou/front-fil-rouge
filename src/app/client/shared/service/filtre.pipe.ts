import { PipeTransform,Pipe } from "@angular/core";
import { Commande } from "../models/commande";


@Pipe({
  name: 'filtre'
})

export class Filtre implements PipeTransform{
  transform(commandes:Commande[], searchTerm:string) {
    if(!commandes || !searchTerm){
      return commandes
    }
    return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(
      searchTerm.toLowerCase()) !== -1);
  }
}
