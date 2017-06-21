import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TradeService} from "./service/trade.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TradeService
  ]
})
export class SharedModule {
}
