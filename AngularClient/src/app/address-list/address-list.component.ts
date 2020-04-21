import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Address} from '../address';
import { AppserviceService } from '../appservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

id: number;
data: any;
address: Observable<Address[]>;
name= ''; city=''; street=''; houseNo;
constructor(private httpClient:HttpClient,private router: Router,
private appServiceService:AppserviceService,private route: ActivatedRoute) { 
    }

ngOnInit() {
	console.log("hi");
	this.reloadData();
}

 reloadData() {
     this.appServiceService.getAddressList()
    .subscribe(address=>
    {  this.address=address;
    console.log(address)});
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
    //this.id = this.route.snapshot.params['id'];
    
    this.appServiceService.getAddress(id)
      .subscribe(data => {
        console.log(data)
      }, error => console.log(error));
  }

  goSave(){
  this.router.navigate(['/create']);
  }
 

/*updateAddress() {
    this.appServiceService.updateAddress(this.id, this.address)
      .subscribe(data => console.log(data), error => console.log(error));
    this.address = new Address();
    this.gotoList();
  }

  onSubmit() {
    this.updateAddress();    
  }*/


  


}
