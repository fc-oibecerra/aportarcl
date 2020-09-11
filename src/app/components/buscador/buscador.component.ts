import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IniciativasService } from '../../servicios/iniciativas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  eventos:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _iniciativasService: IniciativasService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.eventos = this._iniciativasService.buscarEventos( params['termino'] );
      console.log( this.eventos );
    });

  }

}
