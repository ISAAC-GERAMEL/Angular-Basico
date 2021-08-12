import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class listadoComponent {
  heroes: string[] = ['Batman', 'Ironman', 'Hulk', 'Ckan', 'DeadPool'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
