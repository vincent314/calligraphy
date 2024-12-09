import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Calligraphy} from "../../domain/model/Calligraphy";
import {ListItemComponent} from "../list-item/list-item.component";
import {CalligraphyService} from "../../domain/services/calligraphy.service";
import {OrderByPipePipe, OrderingEnum} from "../order-by-pipe/order-by-pipe.pipe";
import {NgIcon, NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroBarsArrowDownSolid, heroBarsArrowUpSolid} from "@ng-icons/heroicons/solid";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgIconComponent,
    AsyncPipe,
    OrderByPipePipe,
    ListItemComponent,
    NgIcon,
  ],
  templateUrl: './list.component.html',
  viewProviders: [provideIcons({heroBarsArrowDownSolid, heroBarsArrowUpSolid})]
})
export class ListComponent {
  ordering: OrderingEnum = OrderingEnum.DESCENDING;
  calligraphies$: Observable<Calligraphy[]>;

  constructor(readonly calligraphyService: CalligraphyService) {
    this.calligraphies$ = calligraphyService.getHaikus();
  }

  switchOrdering() {
    switch (this.ordering) {
      case OrderingEnum.ASCENDING:
        this.ordering = OrderingEnum.DESCENDING;
        break;
      case OrderingEnum.DESCENDING:
        this.ordering = OrderingEnum.ASCENDING;
        break;
    }
  }

  protected readonly OrderingEnum = OrderingEnum;
}
