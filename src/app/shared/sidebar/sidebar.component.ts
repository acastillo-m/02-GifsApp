import { Component } from '@angular/core';
import { BusquedaService } from '../../gifs/services/busqueda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  get historial(){
  //   console.log('historial', this.historial);
     return this.busquedaService.historial;
  }

  constructor(
    private busquedaService: BusquedaService,
  ) 
  { }

  buscar(termino: string){
    this.busquedaService.bucarGifs(termino);
  }




}
