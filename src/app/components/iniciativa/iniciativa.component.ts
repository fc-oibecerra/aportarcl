import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { IniciativasService } from '../../servicios/iniciativas.service';

@Component({
  selector: 'app-iniciativa',
  templateUrl: './iniciativa.component.html'
})
export class IniciativaComponent {

  iniciativa:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _iniciativasService: IniciativasService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.iniciativa = this._iniciativasService.getHeroe( params['id'] );
        // console.log(this.heroe);
    });

  }

}
