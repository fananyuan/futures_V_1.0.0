import {Component, OnInit} from "@angular/core";
import {TradeService} from "../shared/service/trade.service";
import crypto from "crypto-js";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
   username = "MN10001846";
   password = 123456;
  constructor(private trade: TradeService) {
  }

  ngOnInit() {
    this.trade.login().subscribe(data => console.log(data));
  }

  encodePwd(Salt_data, username, password): string {
    const str = username + password;
    let ba = String(crypto.SHA256(str));
    ba = String(crypto.SHA256(ba));
    ba = ba + Salt_data;
    ba = String(crypto.SHA256(ba));
    ba = String(crypto.SHA256(ba));
    return ba;
  }

}
