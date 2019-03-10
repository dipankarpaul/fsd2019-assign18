import { Injectable } from '@angular/core';
import { ISItem } from '../class/isitem';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoggedIn:boolean = false;
  itemList: Array<ISItem> = new Array<ISItem>();
  cartList: Array<ISItem> = new Array<ISItem>();
  orderList: Array<ISItem> = new Array<ISItem>();
  constructor() { }

  prepareListOfItems(list: Array<ISItem>): void {
    for (let index = 0; index < 10; index++) {
      const element = new ISItem();
      element.productId = index;
      element.productName = "Product_"+index;
      element.unitPrice = (index + 1) * 10;
      list.push(element);
    }
  }
}
