import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  title = 'FHCC Events';

  titleObject = {
    title: 'FHCC Events',
    id: 'events'
  };

  isActive = true;

  constructor() { }


  ngOnInit() {
  }

  posterView() {
    this.isActive = true;
  }

  calendarView() {
    this.isActive = false;
  }

}
