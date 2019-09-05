import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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

  title = 'News and Updates';

  titleObject = {
    title: 'News and Updates',
    id: 'news'
  };

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
    // console.log('destroyed');
  };




  onStoryChange(story) {

    // console.log('changed story: ', story);
    this.story = story;

    // this.featureStory = story;

  }


}
