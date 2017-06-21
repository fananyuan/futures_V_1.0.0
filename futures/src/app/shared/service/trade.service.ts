import {Injectable} from "@angular/core";
import {Remote} from "../model/global.config";
import {Observable} from "rxjs/Observable";
@Injectable()
export class TradeService {
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(Remote.Trade);
  }

  sendMsg(msg) {
    switch (this.ws.readyState) {
      case 1:
        this.ws.send(msg);
        break;
      case 0:
        break;
      case 2:
        break;
      // default:
        // Toast({
        //   message: '服务器链接失败，请刷新重试！'
        // });
        // break;

    }
  }

  login(): Observable<any> {
    return new Observable(observer =>
      this.ws.onmessage = (event) => observer.next(JSON.parse(event.data))
    );
  }

}
