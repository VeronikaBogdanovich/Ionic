import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(data:any[],fterm: string) {

    if(fterm&&fterm.trim()!=''){
      return data.filter((name)=>{
        return (name.name.toLowerCase().indexOf(fterm.toLowerCase())>-1);
      })
    }
    return data;
  }
}
