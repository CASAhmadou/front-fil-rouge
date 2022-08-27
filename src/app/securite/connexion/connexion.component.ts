import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { SessionLoginService } from '../shared/service/session-login.service';
import { TokenLoginService } from '../shared/service/token-login.service';

@Component({
  selector: 'cas-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  constructor(private sessionLogin: SessionLoginService,
    private tok: TokenLoginService, private router:Router, private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  connect: User ={}

  send():void{
    this.sessionLogin.nameLogin(this.connect).subscribe(
      data => {
        // console.log(data.id)
        this.tok.valueToken(data.token)

      })
    }

}
