import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-clock',
  templateUrl: './live-clock.component.html',
  styleUrls: ['./live-clock.component.css']
})

export class LiveClockComponent implements OnInit {

    ngOnInit(){}

	 startTime() {
	  var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var s = today.getSeconds();
	  m = this.checkTime(m);
	  s = this.checkTime(s);
	  document.getElementById('txt1').innerHTML =
	  h + ":" + m + ":" + s;
	  var t = setTimeout(this.startTime, 500);
	}
	 checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}



}
