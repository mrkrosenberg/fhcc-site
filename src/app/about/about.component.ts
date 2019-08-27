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

  bioCollection: Bio[];

  constructor(private firebaseService: FirebaseService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
      this.firebaseService.getBio()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(biography => {

      this.bioCollection = biography.reverse();
      // console.log(this.bioCollection);

    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    // console.log('destroyed');
  }

}
