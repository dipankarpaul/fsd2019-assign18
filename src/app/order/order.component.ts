import { Component, OnInit } from '@angular/core';
import { ISItem } from '../shared/class/isitem';
import { Router } from '@angular/router';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderList: Array<ISItem> = new Array<ISItem>();

  constructor(private route: Router, public cs: CommonService) { 
    this.orderList = this.cs.orderList;
  }

  ngOnInit() {
  }

  doCancel(item: ISItem): void {
    this.cs.orderList = this.cs.orderList.filter(obj => { return obj.orderId != item.orderId});
    this.orderList = this.cs.orderList;
  }

}
