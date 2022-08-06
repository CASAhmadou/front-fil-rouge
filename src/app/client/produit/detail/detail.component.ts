import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Detail } from '../../shared/models/detail';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'cas-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  activeTab = 'search';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
  }

  detail$ : Observable<Detail> | null = null

  constructor(private serv:CatalogueService, private route : ActivatedRoute) { }

  private type: any =""
  private id: any = 0
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.type=this.route.snapshot.paramMap.get(this.type)
    this.detail$=this.serv.getProduit$(this.id)
  }












  // console.log('ok');
  //   const id = this.route.snapshot.params['id'];
  //   // this.type = this.route.snapshot.paramMap.get('type') ;
  //   this.serv.getProduit$(id).subscribe(data => {
  //     this.detail$ = this.serv.getProduit$(this.detail$)
  //   })
}
