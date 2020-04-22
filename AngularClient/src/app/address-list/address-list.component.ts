import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Address} from '../address';
import { AppserviceService } from '../appservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

submitted = false;
id: number;
data: [];
address:Address;
name= ''; city=''; street=''; houseNo;
constructor(private httpClient:HttpClient,private router: Router,
private appServiceService:AppserviceService,private route: ActivatedRoute,private location: Location) { 
    }

ngOnInit() {
	console.log("hi");
	this.reloadData();
}

 reloadData() {
     this.appServiceService.getAddressList()
    .subscribe(data=>
    {  this.data=data;
    console.log(data)});
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<any>('/api/validateLogin',{headers});
  }

  deleteAddress(id: number) {
    this.appServiceService.deleteAddress(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getAddress(id: number){
    this.id = this.route.snapshot.params['id'];
    
    this.appServiceService.getAddress(id)
      .subscribe(data => {this.address=data;
        console.log(data)
      }, error => console.log(error));
  }

  goSave(){
  this.router.navigate(['']);
  }
 

updateAddress() {
 this.id = this.address.id;
 console.log(this.id);
    this.appServiceService.updateAddress(this.id,this.address)
      .subscribe(data => console.log(data), error => console.log(error));
    this.address = new Address();
   
  }

  onSubmit() {
  this.submitted = true;
    this.updateAddress();
    this.router.navigateByUrl('/home',{ skipLocationChange: true });
    location.reload();    
  }


  


}
