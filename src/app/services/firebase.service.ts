import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 
@Injectable()
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

}
