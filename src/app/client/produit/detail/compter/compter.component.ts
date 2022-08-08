import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/client/shared/models/detail';

@Component({
  selector: 'cas-compter',
  templateUrl: './compter.component.html',
  styleUrls: ['./compter.component.css']
})
export class CompterComponent implements OnInit {
  detail$ : Observable<Detail> | null = null

  constructor() { }

  ngOnInit(): void {
  }

  i: number = 0
  panier(): void{
    alert("ok")
  }
}
