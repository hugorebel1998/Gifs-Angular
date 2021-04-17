import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(
    private http: HttpClient
  ) {

  }

  private apiKey: string = "iRFI6GToUPki1TaxRuqT8GNWTuzQrgKW";

  private _historial: string[] = [];
  get historial() {

    return [...this._historial];
  }
  buscarGifs(query: string) {
    //para subir un elemento al array  unshift
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=iRFI6GToUPki1TaxRuqT8GNWTuzQrgKW&q=Musica&limit=10')
    // .then( resp => {
    //   resp.json().then(data => {
    //     console.log(data);
    //   })
    // })

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=iRFI6GToUPki1TaxRuqT8GNWTuzQrgKW&q=Musica&limit=10')
      .subscribe((resp: any) => {
        console.log(resp.data)
      })
  }

}
