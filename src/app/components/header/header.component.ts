import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../../shared/auth/auth.service';
import { DataService } from '../../data.service';

declare function require(path: string);

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

	errorMessage = null;
	wallet = {};
	// logo = require('/assets/stoplight.svg');

	constructor(
		// private dataStorageService: DataStorageService,
		private authService: AuthService,
		private dataService: DataService<any>
	) {}

	ngOnInit() {
		this.Wallet();
	}
	// onSaveData() {
	//   this.dataStorageService.storeRecipes()
	//     .subscribe(
	//       (response: Response) => {
	//         console.log(response);
	//       }
	//     );
	// }

	// onFetchData() {
	//   this.dataStorageService.getRecipes();
	// }

	public Wallet() {
		return this.dataService
			.getWallet()
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				result.forEach(participant => {
				});
				console.log('Wallet ===>', result);
				this.wallet = result[0];
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else if (error === '404 - Not Found') {
					this.errorMessage =
						'404 - Could not find API route. Please check your available APIs.';
					this.errorMessage = error;
				}
			});
	}

	onLogout() {
		this.authService.logout();
	}

	isAuthenticated() {
    this.authService.isAuthenticated();
	}
}
