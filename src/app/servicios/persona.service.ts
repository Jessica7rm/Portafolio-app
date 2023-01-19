import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.URL}/traer`);
  }

  public editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.URL}/editar`, persona);
  }
}