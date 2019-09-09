import { Component, OnInit, Input } from '@angular/core';

// Models
import { Title } from '../models/title';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.scss']
})
export class TitleComponentComponent implements OnInit {

  @Input() titleObject: Title;

  constructor() { }

  ngOnInit() {
  }

}
