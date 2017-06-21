import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TradeService} from "./service/trade.service";
import {MdButtonModule, MdToolbarModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule
  ],
  declarations: [],
  providers: [
    TradeService
  ]
})
export class SharedModule {
}
