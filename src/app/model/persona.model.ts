export class Persona {
  id!: number;
  nombre: string;
  apellido: string;
  img: string;
  acerca: string;
  titulo: string;

  constructor(
    nombre: string,
    apellido: string,
    img: string,
    acerca: string,
    titulo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.acerca = acerca;
    this.titulo = titulo;
  }
    
}