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

  constructor(public firestore: AngularFirestore) {

    this.stories = this.firestore.collection('stories').valueChanges();

   }

   getStories() {
     return this.stories;
   }

}
