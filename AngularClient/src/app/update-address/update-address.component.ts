import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
import { AppserviceService } from '../appservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  id:number;
  address:Address;
  constructor(private route: ActivatedRoute,private router: Router,
    private appServiceService: AppserviceService,private location: Location) { }


  ngOnInit() {

  	this.address = new Address();
  	this.id = this.route.snapshot.params['id'];
  	 this.appServiceService.getAddress(this.id)
      .subscribe(data => {
        console.log(data)
      }, error => console.log(error));

  }

  updateAddress() {
  this.id = this.route.snapshot.params['id'];
    this.appServiceService.updateAddress(this.id, this.address)
      .subscribe(data => {
       
       console.log(data), error => console.log(error);});
    this.address = new Address();
    this.gotoList();
  }

  onSubmit() {
    this.updateAddress();    
  }

 gotoList(){
  this.router.navigate(['/home']);
  location.reload();
  }

}
