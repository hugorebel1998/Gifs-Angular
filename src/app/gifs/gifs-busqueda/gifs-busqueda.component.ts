import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-busqueda',
  templateUrl: './gifs-busqueda.component.html',
  styles: [
  ]
})
export class GifsBusquedaComponent {

  constructor(
    private gifsService: GifsService
  ) {
  }
  // En caso de marcar error asignar buscador!:ElementRef
  @ViewChild('buscador') buscador: ElementRef<HTMLInputElement>

  buscar() {
    const valor = this.buscador.nativeElement.value;
    //Validacion de espacios en bancos y que se guarden
    if (valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.buscador.nativeElement.value = '';
    // console.log(valor);
  }

}
