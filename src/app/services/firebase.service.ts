import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story';

// Firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 
@Injectable()
export class FirebaseService {

  storyCollection: AngularFirestoreCollection<Story>;

  stories: Observable<Story[]>;

  constructor(public firestore: AngularFirestore, private db: AngularFireDatabase) {

    this.stories = this.firestore.collection('stories').valueChanges();

   }

  //  getStories() {
  //    return this.stories;
  //  }

  getStories(batch, lastKey?) {

    const query = {
      orderByKey: true,
      limitToFirst: batch
    }

    if (lastKey) {
      query['startAt'] = lastKey;
    }

    return this.db.list('/stories');

  }

}
