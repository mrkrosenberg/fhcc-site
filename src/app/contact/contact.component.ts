import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'Contact Us';

  titleObject = {
    title: 'Contact Us',
    id: 'contact'
  };

  constructor() { }

  ngOnInit() {
  }

}
