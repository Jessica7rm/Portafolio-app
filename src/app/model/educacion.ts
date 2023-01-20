export class Educacion {
    id!:number;
    titulo:string;
    institucion:string;
    fechainicio:string;
    fechafin:string;

    constructor(titulo: string, institucion: string, fechainicio: string, fechafin: string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
    }
}
