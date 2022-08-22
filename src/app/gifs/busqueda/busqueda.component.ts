import { Component, ElementRef, ViewChild } from '@angular/core';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{

  @ViewChild('txtReferencia') txtReferencia!: ElementRef<HTMLInputElement>;

  constructor(
    private busquedaService : BusquedaService
  ){}

  buscar(){
    const resultado:string = this.txtReferencia.nativeElement.value;
    this.busquedaService.bucarGifs(resultado)
    this.txtReferencia.nativeElement.value='';
  }
}
