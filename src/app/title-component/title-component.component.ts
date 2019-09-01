import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css']
})
export class TitleComponentComponent implements OnInit {

  @Input() titleObject: Object;

  constructor() { }

  ngOnInit() {
    console.log('here you go: ', this.titleObject);
  }

  // Write if statement to change background images depending on the title

}
