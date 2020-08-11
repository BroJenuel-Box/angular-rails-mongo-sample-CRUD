import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {

  private stringDataSource = new BehaviorSubject<string>('This is the Default');
  currentData = this.stringDataSource.asObservable();

  constructor() { }

  changeMessage(data: string) {
    this.stringDataSource.next(data)
  }
}
