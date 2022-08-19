import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from 'src/app/client/shared/models/commande';

@Pipe({
  name: 'commandeFilter'
})
export class CommandeFilterPipe implements PipeTransform {

  transform(commandes: Commande[], searchTerm: string) {
    if(!commandes || !searchTerm){
        return commandes
    }
    return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}
}

@Pipe({
name:'CommandeDateFilter'
})
export class CommandeDateFilter implements PipeTransform{
transform(commandes: Commande[], searchTermDate: any) {
    if(!commandes || !searchTermDate){
        return commandes
    }
    return commandes.filter((commande:any) => {
        const date = new Date(commande.dateCommande)
        return date.toLocaleDateString() == new Date(searchTermDate).toLocaleDateString()
    });
  }
}

@Pipe({
name:'commandeZoneFilter'
})
export class CommandeZoneFilter implements PipeTransform{
transform(commandes: Commande[], searchTermZone: string) {
    if(!commandes || !searchTermZone){
        return commandes
    }
    return commandes.filter(commande => commande.zone?.libelle?.toLowerCase().indexOf(searchTermZone.toLowerCase()) !== -1);
  }
}

@Pipe({
name:'CommandeCLientFilter'
})
export class CommandeCLientFilter implements PipeTransform{
transform(commandes: Commande[], searchTermClient: string) {
    if(!commandes || !searchTermClient){
        return commandes
    }
    return commandes.filter(commande => commande.client?.prenom?.toLowerCase().indexOf(searchTermClient.toLowerCase()) !== -1);
}


}
