import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/service/common.service';
import { ISItem } from '../shared/class/isitem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  esmForm: FormGroup;
  submitted = false;
  itemList: Array<ISItem> = new Array<ISItem>();
  cartList: Array<ISItem> = new Array<ISItem>();
  selectedItem: ISItem;
  showAddtoCartBlock: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router, public cs: CommonService) { 
    this.itemList = cs.itemList;
    this.cartList = cs.cartList;
  }

  ngOnInit() {
    this.esmForm = this.formBuilder.group({
      quantity: ['', Validators.required]
  });
  }

  doOnSelectItem(item: ISItem): void {
    this.selectedItem = item;
    this.showAddtoCartBlock = true;
  }

  doAddToCart(): void {
    let foundItem: ISItem =  this.cartList.find( item => {return  item.productId === this.selectedItem.productId;});
    if (foundItem) {
      foundItem.quantity = parseInt(this.esmForm.value.quantity) + this.selectedItem.quantity;
    } else {
      this.selectedItem.quantity = parseInt(this.esmForm.value.quantity);
      this.cartList.push(cloneDeep(this.selectedItem));
    }
    this.showAddtoCartBlock = false;
  }

  doOrder(item: ISItem): void {
    this.cs.cartList = this.cs.cartList.filter(obj => { return obj.productId != item.productId});
    this.cartList = this.cs.cartList;
    if(this.cs.orderList.length > 0) {
      item.orderId = this.cs.orderList.pop().orderId + 1;
    } else {
      item.orderId = 1;
    }
    this.cs.orderList.push(item);
    console.log('this.cs.orderList=', this.cs.orderList);
  }

}
