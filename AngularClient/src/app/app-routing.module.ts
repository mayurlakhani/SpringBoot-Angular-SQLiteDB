import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveClockComponent } from './live-clock/live-clock.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: AddressListComponent},
  { path: 'clock', component: LiveClockComponent },
  { path: 'create', component: CreateAddressComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
