import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveClockComponent } from './live-clock/live-clock.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { NewAddressComponent } from './new-address/new-address.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'clock', component: LiveClockComponent },
  {
      path: 'home',
      component: AddressListComponent,
      children: [
        
        {
            path: '',
            component: CreateAddressComponent
        }
        
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
