import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombreProyecto!: string;
  descripcionProyecto!: string;
  linkProyecto!: string;
  imgProyecto!: string;
  fechaProyecto!: string;

  constructor(private proyService: ProyectoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreProyecto,
      this.descripcionProyecto,
      this.imgProyecto,
      this.linkProyecto,
      this.fechaProyecto
    );

    //deshabilitar el envío de formularios si hay campos no válidos
    (function () {
      'use strict';

      // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
      var forms = document.querySelectorAll('.needs-validation');

      // Bucle sobre ellos y evitar el envío
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

    //guarda el nuevo proyecto y vuelve a pagina principal
    this.proyService.save(proyecto).subscribe((response) => {
      alert('Proyecto añadido');
      this.proyService.lista();
      this.router.navigate(['']);
    });
  }
}
