import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dosDecimales',
  standalone: true
})
export class DosDecimalesPipe implements PipeTransform {

  transform(valor: number): string {
    if (!valor) {
      return '';
    }

    return valor.toFixed(2);
  }

}
