import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona: Persona = new Persona("","","","","");
  
  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data})
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
