import { Pipe, PipeTransform } from '@angular/core';
// import { NOTFOUND } from 'dns';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
  // ,pure: false
})
export class ImagenPipe implements PipeTransform {

  image: string = 'assets/no-image.png';

  transform(heroe: Heroe): string {
    if (heroe.id && !heroe.alt_img && !`assets/heroes/${heroe.id}.jpg`){
      this.image = 'assets/no-image.png';
    } else if( heroe.id && heroe.alt_img ){
      this.image = heroe.alt_img;
    } else if (!heroe.id && !heroe.alt_img){
      this.image = 'assets/no-image.png';
    } else if (!heroe.id && heroe.alt_img){
      this.image = heroe.alt_img;
    } else {
      this.image = `assets/heroes/${heroe.id}.jpg`;
    }

    return this.image;
  }

}
