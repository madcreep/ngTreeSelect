import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class Ng2TreeService {

  constructor() { }

  @Output() branchLoadEvent: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  @Output() peersLoadEvent: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

}
