import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumpnailPipe implements PipeTransform {

  transform(filename: string, size?: any): any {
    switch (size) {
      case 'small':
        return filename.substring(0, filename.indexOf('.')) + '-tn160.png';
      case 'medium':
        return filename.substring(0, filename.indexOf('.')) + '-tn320.png';
      case 'large':
        return filename.substring(0, filename.indexOf('.')) + '-tn640.png';
      default:
        return filename;
    }
  }

}
