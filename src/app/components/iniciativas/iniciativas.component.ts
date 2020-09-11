import { Component, OnInit } from '@angular/core';
import { IniciativasService, Evento } from '../../servicios/iniciativas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './iniciativas.component.html'
})
export class IniciativasComponent implements OnInit {

  heroes:Evento[] = [];

  constructor( private _iniciativasService:IniciativasService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._iniciativasService.getEventos();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
