import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(lista: any[], texto: string = '', columna: string): any[] {

    if( texto == '' ){
      return lista;
    }

    if( !lista ){
      return lista;
    }

    texto = texto.toLocaleLowerCase();

    return lista.filter(
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
