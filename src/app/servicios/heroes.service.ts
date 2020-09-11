
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Trauma Ocular",
      bio: "Evento en apoyo a coordinadora de victimas de trauma ocular.",
      img: "assets/img/trauma-ocular.jpg",
      aparicion: "2020-08-14",
      casa:""
    },
    {
      nombre: "Olla Digna",
      bio: "Actualmente reunimos fondos para ir en apoyo de ollas comunes en santiago y Viña del Mar. Las necesidades son muchas y cada día se suman nuevas iniciativas en distintas partes del pais, y en cada una de las ollas se suman nuevos beneficiarios, todos los días.Queremos llegar a la mayor cantidad de gente, pero necesitamos ayuda. Tu ayuda.",
      img: "assets/img/olla-digna.jpg",
      aparicion: "2020-09-14",
      casa:""
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: string ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
