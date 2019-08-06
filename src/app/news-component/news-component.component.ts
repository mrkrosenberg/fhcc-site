import { Component, OnInit } from '@angular/core';

// Services
import { FirebaseService } from '../services/firebase.service';

// Models
import { Story } from '../models/story';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }


  // featureStory = {
  //   title : ``,
  //   content : ``
  // }

  // story1 = {
  //   title : `We are the FHCC`,
  //   content : `story 1`
  // }

  // story2 = {
  //   title : `Thanks, Boulder Climbing Community!`,
  //   content : `story 2`
  // }

  // story3 = {
  //   title : `Wag Bags`,
  //   content : `story 2`
  // }

  // story4 = {
  //   title : `Adopt a Highway`,
  //   content : `story 2`
  // }

  // story5 = {
  //   title : `Cannonball Community Night`,
  //   content : `story 2`
  // }

  // story6 = {
  //   title : `Vandemonium`,
  //   content : `story 2`
  // }


  ngOnInit() {

    // this.featureStory = this.story1;

    // this.firebaseService.getStories().subscribe(stories => {
    //   console.log(stories);
    //   console.log('here');
    // })

  }


  onStoryChange(story) {

    // this.featureStory = story;

  }


}
