import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestDataSource} from './rest.datasource';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  constructor() {
  }

  authenticate(username: string, password: string): Observable<boolean> {
    // this.datasource.authenticate(username, password);
      return Observable.of(true);
  }

  get authenticated(): boolean {
    return true;
  }
  clear() {
  }
}
