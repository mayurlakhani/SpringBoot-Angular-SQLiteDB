import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   goSave(){
  this.router.navigate(['/home/create']);
  }

}
