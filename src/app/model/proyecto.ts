export class Proyecto {
    id!: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    imgProyecto: string;
    linkProyecto: string;
    fechaProyecto: string;
  
    constructor(
      nombreProyecto: string,
      descripcionProyecto: string,
      imgProyecto: string,
      linkProyecto: string,
      fechaProyecto: string
    ) {
      this.nombreProyecto = nombreProyecto;
      this.descripcionProyecto = descripcionProyecto;
      this.imgProyecto = imgProyecto;
      this.linkProyecto = linkProyecto;
      this.fechaProyecto = fechaProyecto;
    }
  
}
