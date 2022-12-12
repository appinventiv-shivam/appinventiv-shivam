import { Pipe, PipeTransform } from '@angular/core';
import * as routes from "../../constant/routes";

@Pipe({
  name: 'abosluteRouting'
})
export class AbosluteRoutingPipe implements PipeTransform {

  transform(route:string) {
    try {
      // console.log(route,"pipee");
      // @ts-ignore: Unreachable code error
      return routes[route].fullUrl;
    } catch (error) {
      // console.log(route, '--------');
      return '';
    }
  }

}
