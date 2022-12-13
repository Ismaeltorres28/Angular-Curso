import { Component } from '@angular/core';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[]=['Toño','Spiderman','Iroman','Hulk','Thor'];
  heroeBorrado: string= '';

  borrarHeroe(){
    console.log("borrando..");
    this.heroeBorrado = this.heroes.shift()||'';
  }
}


