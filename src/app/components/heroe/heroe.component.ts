import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { IniciativasService } from '../../servicios/iniciativas.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: IniciativasService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe( params['id'] );
        // console.log(this.heroe);
    });

  }

}
