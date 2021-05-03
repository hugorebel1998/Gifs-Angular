import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifs } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private http: HttpClient) {

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);

    }

  }

  private apiKey: string = "iRFI6GToUPki1TaxRuqT8GNWTuzQrgKW";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {

    return [...this._historial];
  }
  buscarGifs(query: string) {
    //para subir un elemento al array  unshift
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=iRFI6GToUPki1TaxRuqT8GNWTuzQrgKW&q=Musica&limit=10')
    // .then( resp => {
    //   resp.json().then(data => {
    //     console.log(data);
    //   })
    // })

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '6')
    .set('q', query);

    console.log(params.toString());

    this.http.get<SearchGifs>(`${this.serviceUrl}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data)
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));

      })
  }

}
