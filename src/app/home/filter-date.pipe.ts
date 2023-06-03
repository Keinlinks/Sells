import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate',
})
export class FilterDatePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const formatear = value.map((a: any) => {
      return {
        ...a,
        fecha: convertirFecha(a.fecha),
      };
    });
    formatear.sort(
      (a: { fecha: number }, b: { fecha: number }) => a.fecha - b.fecha
    );
    if (arg === 'true') {
      return formatear;
    }
    if (arg === 'false') {
      return formatear.reverse();
    }
  }
}
function convertirFecha(fechaString: string) {
  const partes = fechaString.split('/'); // Divide la cadena por '/'
  const dia = parseInt(partes[0], 10); // Obtén el día como número entero
  const mes = parseInt(partes[1], 10) - 1; // Obtén el mes como número entero (resta 1 porque los meses en JavaScript son indexados desde 0)
  const anio = parseInt(partes[2], 10); // Obtén el año como número entero
  const fecha = new Date(anio, mes, dia); // Crea un objeto Date con los valores obtenidos

  return fecha;
}
