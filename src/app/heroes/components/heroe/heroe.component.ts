import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Batman'
    edad: number = 34;

    get nombreUpperCase (){
        return this.nombre.toUpperCase();
    }

    obtenerNombre (): string {
        return `${this.nombre} - ${this.edad}`;  //Crear template de String
        //return this.nombre + ' - ' + this.edad;
    }

    cambiarHeroe ():void {
        this.nombre = 'Superman';
    }

    cambiarEdad ():void {
        this.edad = 24;
    }
    
}