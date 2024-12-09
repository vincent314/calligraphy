import {Pipe, PipeTransform} from '@angular/core';

export enum OrderingEnum {
  ASCENDING, DESCENDING
}

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipePipe implements PipeTransform {

  transform(values: any[] | null, ...args: any[]): any[] {
    if (values == null) return [];
    return values.sort((left: any, right: any) => {
      const [field, ordering] = args;
      const leftValue = left[field];
      const rightValue = right[field];

      let orderingValue = 1;
      if (ordering === OrderingEnum.DESCENDING) {
        orderingValue = -1;
      }

      if (leftValue == null || leftValue < rightValue) return -1 * orderingValue;
      else if (rightValue == null || rightValue < leftValue) return orderingValue;
      else return 0;
    })
  }

}
