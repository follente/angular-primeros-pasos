import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Bataman', 'Supman', 'Speedman', 'Linterna Apagada'];

  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }

  resetHeroe(): void {
    this.heroes = ['Bataman', 'Supman', 'Speedman', 'Linterna Apagada'];
    this.heroeBorrado = '';
  }
}
