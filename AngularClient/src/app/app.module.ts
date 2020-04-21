import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LiveClockComponent } from './live-clock/live-clock.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';


@NgModule({
  declarations: [
    AppComponent,
    LiveClockComponent,
    AddressListComponent,
    CreateAddressComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
