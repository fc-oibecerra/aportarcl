
import { Injectable } from '@angular/core';

@Injectable()
export class IniciativasService {

  private eventos:Evento[] = [
    {
      nombre: "Talleres de monitores Constitucionales",
      bio: "Taller abierto para formación de ciudadanos que a su vez puedan formar a otros en los aspectos principales del proceso constituyente. Inscribete aqui <a href="">Formulario de inscripción</a>",
      img: "assets/iniciativas/mellado.jpg",
      aparicion: "2020-10-05",
      casa:"taller"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getEventos():Evento[]{
    return this.eventos;
  }

  getHeroe( idx: string ){
    return this.eventos[idx];
  }

  buscarEventos( termino:string ):Evento[]{

    let heroesArr:Evento[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.eventos.length; i ++ ){

      let evento = this.eventos[i];

      let nombre = evento.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        evento.idx = i;
        heroesArr.push( evento )
      }

    }

    return heroesArr;

  }


}


export interface Evento{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
