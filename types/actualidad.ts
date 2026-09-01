export interface Publicacion {
  id: number;
  categoria: string;
  titulo: string;
  tituloSEO?: string;
  resumen: string;
  contenido: string;
  imagen: string;
  fecha: string;
  fechaISO: string;
  fechaPublicacionISO?: string;
  tiempoLectura: string;
  destacada: boolean;
}