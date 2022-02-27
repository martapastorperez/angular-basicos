import { Component } from '@angular/core';

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html',
  //template:`<h1>Hola de nuevo</h1>  `
})


export class HeroeComponent{
    nombre: string='Iron man';
    edad: number=45;
    
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }


    obtenerNombre():string{
        return `${this.nombre}-${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spiderman';

    }
    
    cambiarEdad():void{
        console.log('eu')
        this.edad=30;
    }
}