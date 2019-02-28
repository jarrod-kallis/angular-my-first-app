import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `
  ]
})
export class DisplayDetailsComponent implements OnInit {
  displayDetails: boolean = false;
  clickDetails: any[] = [];

  constructor() {}

  ngOnInit() {}

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickDetails.push({
      id: this.clickDetails.length + 1,
      description: new Date()
    });
  }
}
