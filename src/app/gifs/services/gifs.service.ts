import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    this._historial =  JSON.parse(localStorage.getItem('historial')!) || [] ;
    this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [] ;
    
  }
  
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  private apiKey: string = '7Uhyc8JBLmQB0ttqa86pIyj7NMUphdPV';
  private url: string = 'https://api.giphy.com/v1/gifs';

  get historial() {
    return [...this._historial]
  }

  buscarGifs( termino: string ) {
    termino = termino.trim().toLowerCase();
    if( !this._historial.includes(termino)) {
      this._historial.unshift( termino )
      this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial', JSON.stringify( this._historial))
    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',termino)

    console.log("params", params.toString())
    this.http.get<SearchGifsResponse>(`${this.url}/search`,{params}).subscribe( (resp) => {
      this.resultados = resp.data
      localStorage.setItem('resultados', JSON.stringify( this.resultados ))
    })
  }


}
