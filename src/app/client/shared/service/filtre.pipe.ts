import { PipeTransform, Pipe } from "@angular/core";
import { Commande } from "../models/commande";


@Pipe({
  name: 'filtreEtat'
})

export class FiltreEtat implements PipeTransform{
  transform(commandes:Commande[], etatSearch:string) {
    if(!commandes || !etatSearch){
      return commandes
    }
    return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(
      etatSearch.toLowerCase()) !== -1);
  }

}

@Pipe({
  name:'dateFilter'
  })
  export class DateFilter implements PipeTransform{
  transform(commandes: Commande[], dateSearch: any) {
      if(!commandes || !dateSearch){
          return commandes
      }
      return commandes.filter((commande:any) => {
          const date = new Date(commande.dateCommande)
          return date.toLocaleDateString() == new Date(dateSearch).toLocaleDateString()
      });
    }
  }


