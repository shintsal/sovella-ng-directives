import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  count: number = 0;
  showP = false;
  clicks: string[] = [];

  currentDate = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

  hideP() {
    this.showP = !this.showP;
    this.count++;
    //this.clicks.push(this.count);
    this.clicks.push(Date());
  }
  

}
