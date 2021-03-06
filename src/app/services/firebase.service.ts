import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { Story } from '../models/story';
import { Bio } from '../models/bio';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 
@Injectable()
export class FirebaseService {

  storyCollection: AngularFirestoreCollection<Story>;
  stories: Observable<Story[]>;

  biography: AngularFirestoreCollection<Bio>;
  bio: Observable<Bio[]>;

  constructor(public firestore: AngularFirestore) {

    this.stories = this.firestore.collection('test').valueChanges();
    this.bio = this.firestore.collection('bio').valueChanges();

   }

   getStories() {
     return this.stories;
   }

   getBio() {
     return this.bio;
   }

}
