import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'usernameFormat',
})
export class NameFormatPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) {
      return '';
    }
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
