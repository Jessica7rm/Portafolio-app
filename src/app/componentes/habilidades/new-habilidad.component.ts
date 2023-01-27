import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent {
  nombreSkill!: string;
  porcentaje!: number;

  constructor(private skillService: SkillsService, private router: Router) {}
  
  //habilita el input si se selecciona para agregar link de imag

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(
      this.nombreSkill,
      this.porcentaje,
    );

    //deshabilitar el envío de formularios si hay campos no válidos
    (function () {
      'use strict';

      // obtener todos los formularios a validar
      var forms = document.querySelectorAll('.needs-validation');

      // bucle sobre ellos y evitar el envío
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          'submit',
          function (event: any): void {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          },
          false
        );
      });
    })();

    //guarda nueva skill una vez chequeada validacion de campos
    this.skillService.save(skill).subscribe((response) => {
      alert('Skill añadida correctamente');
      this.skillService.lista();
      this.router.navigate(['']);
    });
  }
}
