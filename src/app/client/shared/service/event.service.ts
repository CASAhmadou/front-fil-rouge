import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private childClickedEvent = new BehaviorSubject<any>(0);

  emitChildEvent(msg: any){
     this.childClickedEvent.next(msg)
  }

  childEventListner(){
     return this.childClickedEvent.asObservable();
   }
  constructor() { }
}
