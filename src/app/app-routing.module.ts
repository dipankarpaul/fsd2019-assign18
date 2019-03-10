import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items',      component: ItemsComponent },
  { path: 'order', component: OrderComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
