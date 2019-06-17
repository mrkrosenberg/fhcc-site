import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  constructor() { }

  featureStory = {
    title : ``,
    content : ``
  }

  story1 = {
    title : `We are the FHCC`,
    content : `story 1`
  }

  story2 = {
    title : `Thanks, Boulder Climbing Community!`,
    content : `story 2`
  }

  story3 = {
    title : `Adopt-a-Highway`,
    content : `story 2`
  }

  story4 = {
    title : `Cannonball Community Night`,
    content : `story 2`
  }

  story5 = {
    title : `Vandemonium`,
    content : `story 2`
  }

  story6 = {
    title : `Wag Bags`,
    content : `story 2`
  }


  ngOnInit() {

    this.featureStory = this.story1;

  }


  onStoryChange(story) {

    this.featureStory = story;

  }


}
