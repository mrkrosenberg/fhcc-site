import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

// Services
import { FirebaseService } from '../services/firebase.service';

// Models
import { Bio } from '../models/bio';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  unsubscribe: Subject<void> = new Subject<void>();

  bio: Bio[];

  constructor(private firebaseService: FirebaseService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
      this.firebaseService.getBio()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(bio => {

      this.bio = bio;
      console.log(this.bio);

    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    // console.log('destroyed');
  }

}
