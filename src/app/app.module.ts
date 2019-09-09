import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Modules/Dependencies
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Environment Config
import { firebaseConfig } from '../environments/env-variables';

// Routing
import { AppRoutingModule } from './/app-routing.module';

// Services
import { FirebaseService } from './services/firebase.service';

// Misc Modules
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { ButtonComponent } from './button/button.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeDonateComponent } from './home-donate/home-donate.component';
import { HomeSubscribeComponent } from './home-subscribe/home-subscribe.component';
import { SliderButtonComponent } from './slider-button/slider-button.component';
import { SliderComponent } from './slider/slider.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { MailchimpComponent } from './mailchimp/mailchimp.component';
import { TitleComponentComponent } from './title-component/title-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    ContactComponent,
    DonateComponent,
    PageNotFoundComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    MainTitleComponent,
    ButtonComponent,
    BlogPostComponent,
    HomeEventsComponent,
    EventCardComponent,
    HomeAboutComponent,
    HomeDonateComponent,
    HomeSubscribeComponent,
    SliderButtonComponent,
    SliderComponent,
    NewsComponentComponent,
    MailchimpComponent,
    TitleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, 'fhcc'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ScrollingModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
