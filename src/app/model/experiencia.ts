export class Experiencia {
  
    id!: number;
    nombreExpe: string;
    empresaExpe: string;
    descripcionExpe: string;
    fechainicio: string;
    fechafin: string;
  
    constructor(
      nombreExpe: string,
      empresaExpe: string,
      descripcionExpe: string,
      fechainicio: string,
      fechafin: string
    ) {
      this.nombreExpe = nombreExpe;
      this.empresaExpe = empresaExpe;
      this.descripcionExpe = descripcionExpe;
      this.fechainicio = fechainicio;
      this.fechafin = fechafin;
    }
  }