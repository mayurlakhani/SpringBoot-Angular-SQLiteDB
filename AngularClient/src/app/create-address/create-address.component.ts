import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Address} from '../address';
import { AppserviceService } from '../appservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

submitted = false;
address:Address =new Address();

constructor(private httpClient:HttpClient,private router: Router,

      private appServiceService:AppserviceService,private location: Location) { 
}

  ngOnInit(): void {}

  save() {
  
    this.appServiceService.createAddress(this.address)
      .subscribe(data => {
      console.log(data);
       error => console.log(error)});
    this.address= new Address();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

   gotoList() {
    //this.router.navigateByUrl('/home',{ skipLocationChange: true });
    location.reload();
  }


}
