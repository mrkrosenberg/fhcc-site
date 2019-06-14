import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  poster = true;
  calendar = false;

  ngOnInit() {
  }

  posterView() {
    this.poster = true;
    this.calendar = false;
  }

  calendarView() {
    this.calendar = true;
    this.poster = false;
  }

}
