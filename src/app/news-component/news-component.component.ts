import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

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

  stories: Story[];
  story: Story;
  unsubscribe: Subject<void> = new Subject<void>();

  constructor(private firebaseService: FirebaseService,
              private storage: AngularFireStorage) {}


  ngOnInit() {

    this.firebaseService.getStories()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(stories => {

      this.stories = stories;

      this.story = stories[0];
      // console.log(this.story);

    });

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('destroyed');
  };




  onStoryChange(story) {

    console.log('changed story: ', story);
    this.story = story;

    // this.featureStory = story;

  }


}

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



      // this.featureStory = this.story1;

    // this.firebaseService.getStories().subscribe(stories => {
    //   console.log(stories);
    //   console.log('here');
    // })
