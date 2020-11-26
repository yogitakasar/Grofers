import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public headerColor: BehaviorSubject<string>;

  constructor() { 
    this.headerColor = new BehaviorSubject<string>(undefined);
  }
}
