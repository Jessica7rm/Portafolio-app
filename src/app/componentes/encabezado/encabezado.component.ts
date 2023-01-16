import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  persona: Persona = new Persona("", "", "", "", "", 0, "", "", "");

  isLogged: boolean = false;

  constructor(
    
  ) { }


ngOnInit(): void {
  
  }
}