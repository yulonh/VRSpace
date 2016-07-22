import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const contact_url = `http://yulonh.com:3000/api/Games`;

@Injectable()
export class GameService {
  constructor(private _http:Http) {
  }

  getGames():Observable<any[]> {
    return this._http.get(contact_url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
