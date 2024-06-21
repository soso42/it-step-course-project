import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShortener',
  standalone: true
})
export class TitleShortenerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if ((value as string).length > 32) {
      return (value as string).substring(0, 32) + '...';
    }
    return value;
  }

}
