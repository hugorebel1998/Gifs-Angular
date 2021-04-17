import { Component, ElementRef ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-busqueda',
  templateUrl: './gifs-busqueda.component.html',
  styles: [
  ]
})
export class GifsBusquedaComponent {

// En caso de marcar error asignar buscador!:ElementRef
@ViewChild('buscador') buscador:ElementRef<HTMLInputElement>

  buscar(){
    const valor = this.buscador.nativeElement.value;
    this.buscador.nativeElement.value = '';
    console.log(valor);
  }

}
