import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  skills!: Skills[];

  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe((data) => {
      this.skills = data;
    });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe((success) => {
        alert('Skill eliminada');
        this.cargarSkills();
      });
    }
    this.router.navigate(['']);
  }
}

