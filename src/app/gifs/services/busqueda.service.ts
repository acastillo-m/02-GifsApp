import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppiGifs, Gif } from '../interfaces/gifs.interface';




@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

    //Parametros de las peticiones HTTP:
    private URL: string = 'https://api.giphy.com/v1/gifs';
    private api_key: string = 'IMS3s336253qFhts2t1jnDMPhf8n9IUz';
    private limit: number = 10;
    private lang: string='es';


    private _historial: string[] = [];
    
    public resultados:Gif[] =[];
  

    get historial(){
    
        return [...this._historial]
    }
    constructor(
    private http: HttpClient    
    )
    {
        // console.log('Servicio de Busqueda inciado');
        this._historial = JSON.parse( localStorage.getItem('historial')!) || [];
        this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];
    }


    bucarGifs(query:string=''){
        const max_numResultados: number = 10;
        //Procesamos la data "query" antes de ejecutar la logica
        //limpiamos los espacios vacios con "trim()" y convertimos todo a minusculas con "tolowercase()"
        query = query.trim().toLocaleLowerCase();

        
        // si el resultado es vacio no realizo ninguna accion, si el resultado tiene algo y ese algo no existe en mi arreglo lo añado
        if(query.trim().length===0){return;}
        else if(!this._historial.includes(query)){
            this._historial.unshift(query); //agrego el nuevo resultado
            this._historial=this._historial.splice(0,max_numResultados); //corto el arreglo para solo tener 10 elementos
            localStorage.setItem('historial', JSON.stringify(this._historial));
        }


        const params = new HttpParams()
            .set('api_key', this.api_key)
            .set('limit', this.limit)
            .set('lang', this.lang)
            .set('q', query);

        
        this.http.get<AppiGifs>(`${this.URL}/search`, {params} )
            .subscribe( (respuesta) => {
            this.resultados = respuesta.data;
            localStorage.setItem('resultados',  JSON.stringify( this.resultados));
        } );
    }
}
