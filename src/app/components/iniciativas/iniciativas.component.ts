import { Component, OnInit } from '@angular/core';
import { IniciativasService, Heroe } from '../../servicios/iniciativas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './iniciativas.component.html'
})
export class IniciativasComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:IniciativasService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
