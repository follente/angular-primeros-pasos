import {Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ titulo }}</h1>

        <h3> BASE: <strong>{{ base }}</strong></h3>

        <button (click)="acumular(-base)"> -{{base}} </button>

        <span>{{ numero }}</span>

        <button (click)="acumular(base)"> +{{base}} </button>
    
    `
})

export class CounterComponent {

    public titulo: string = 'Cpunte-App';
    public numero: number = 0;
  
    public base: number = 1;
  
    acumular(valor:number){
      this.numero += valor;
    }
}
