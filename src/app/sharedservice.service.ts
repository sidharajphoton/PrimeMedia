import { Injectable } from '@angular/core';
import {breadCrumbObj, sharedValues} from './usertype';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  globalObj: sharedValues = {'showBanner': true, 'breadcrumbList': [] , 'showBreadcrumb': false, 'searchTxt': ''};
  constructor() { }
}
