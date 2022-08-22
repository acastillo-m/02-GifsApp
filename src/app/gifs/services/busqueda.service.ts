import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private apiKey: string = 'IMS3s336253qFhts2t1jnDMPhf8n9IUz'
  private _historial: string[] = [];
  


  get historial(){
    
    return [...this._historial]
  }
  constructor(){
    console.log('Servicio de Busqueda inciado');
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
      this._historial=this._historial.splice(0,max_numResultados) //corto el arreglo para solo tener 10 elementos
    }

    
  }
}
