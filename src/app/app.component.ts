

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';


import * as firebase from 'firebase';
// import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app works!';
	loadedFeature = '';

	constructor(private authService: AuthService) {
	}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB243bWmAgNnDjg_1aOMyfuougrQUCAVzI",
      authDomain: "ng-recipe-book-nr.firebaseapp.com"
    });
    this.isAuthenticated()
  }


  onNavigate(feature: string) {
    this.loadedFeature = feature;
	}

  ngAfterViewInit() {

  //   $('.nav a').on('click', function(){
  //     $('.nav').find('.active').removeClass('active');
  //     $(this).parent().addClass('active');
  //   });

  //   $('.dropdown').on('show.bs.dropdown', function(e){
  //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  //   });

  //   $('.dropdown').on('hide.bs.dropdown', function(e){
  //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  //   });

  //   $('.dropdown-menu li').on('click', function(){
  //     $(this).parent().parent().addClass('active');
  //   });
	}


	isAuthenticated() {
    this.authService.isAuthenticated();
	}
}
