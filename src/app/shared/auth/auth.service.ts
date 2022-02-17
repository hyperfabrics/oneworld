import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

import { NotificationService } from '../../shared/notification.service';

@Injectable()
export class AuthService {

    //Notifications
    from = 'top';
    align = 'right';
    successMessage = 'CheckProduct Transaction Successful... ';
    failMessage = 'Sorry, you are authorized to perform the current transaction - please check with the app admin';


	token: string;
  authenticated: boolean = false
	constructor(private router: Router, private notificationService: NotificationService) {}

	signupUser(email: string, password: string) {
		firebase
			.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('you are successfully registered with your email' + email)
        alert('Please login to use the system')
        this.router.navigate(['/signin']);
			})
			.catch(error => console.log(error));
	}

	signinUser(email: string, password: string) {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
        this.authenticated = true;
        this.router.navigate(['/dashboard']);
        console.log('sinign in')
				firebase
					.auth()
					.currentUser.getIdToken()
					.then((token: string) => (this.token = token));
			})
			.catch(error => {
				console.log(error);
				alert(error);
			});
	}

	logout() {
		firebase.auth().signOut();
		console.log('firebase token delete');
		this.router.navigate(['/signin']);
		this.token = null;
	}

	getToken() {
		firebase
			.auth()
			.currentUser.getIdToken()
			.then((token: string) => (this.token = token));
		return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}
}
