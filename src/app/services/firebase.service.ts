import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Story } from '../models/story';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 
@Injectable()
export class FirebaseService {

  storyCollection: AngularFirestoreCollection<Story>;

  story: Observable<Story[]>;

  constructor(public firestore: AngularFirestore) { 

    this.story = this.firestore.collection('story').valueChanges();

  }

  getStories() {
    return this.story;
  }

}
