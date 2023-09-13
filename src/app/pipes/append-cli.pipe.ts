import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI'
})
export class AppendCLIPipe implements PipeTransform {

  transform(value:any,args?:any) {
    return "City name:"+value;
}

}
