import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    templateUrl: './segundocomponent.html',
    standalone: false
})

export class SegundoComponet implements OnInit {
    nombre: string;
    diasemana: string;
    numero: number;

        constructor() {

            //CON this accedemos a las variables.
            this.nombre = "alumno";
            this.diasemana= "Hoy es lunes";
            this.numero = 26;
         }
    ngOnInit() { }
}