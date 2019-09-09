import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {

  heading: String;
  content: String;
  button: String;

  constructor() { }

  ngOnInit() {
  }

  changeGreeting() {

  }

}
