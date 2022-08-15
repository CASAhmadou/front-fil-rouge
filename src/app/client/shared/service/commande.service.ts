import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
   private Postcommande = "http://localhost:8000/api/commandes";

  constructor() { }
}; 
