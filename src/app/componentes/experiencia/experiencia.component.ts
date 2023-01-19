import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: Experiencia[] = [];

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {

    
  }
}

