import {Injectable} from "@angular/core";
import {Remote} from "../model/global.config";
import {Observable} from "rxjs/Observable";
@Injectable()
export class TradeService {
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(Remote.Trade);
  }

  login(): Observable<any> {
    return new Observable(observer =>
      this.ws.onmessage = (event) => observer.next(event.data)
    );
  }

}
