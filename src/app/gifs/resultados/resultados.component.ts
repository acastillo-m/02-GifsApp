import { Component } from '@angular/core';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  
  get resultados(){
    return this.busquedaService.resultados;
  }

  constructor(
    private busquedaService : BusquedaService,
  ) { }

}
