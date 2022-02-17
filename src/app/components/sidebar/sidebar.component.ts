import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth/auth.service';
import { DataService } from '../../data.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboardss',  icon: 'dashboard', class: '' },
    { path: '/productListingContract', title: 'Contract Listings',  icon:'library_books', class: '' },
    { path: '/supplier', title: 'Suppliers',  icon:'bubble_chart', class: '' },
    { path: '/retailer', title: 'retailers',  icon:'location_on', class: '' },
    { path: '/importer', title: 'Importers',  icon:'content_paste', class: '' },
    { path: '/regulator', title: 'Regulators',  icon:'notifications', class: '' },
    { path: '/partner', title: 'partners',  icon:'bubble_chart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  errorMessage = null;
  wallet = {};


  constructor(private authService: AuthService, private dataService: DataService<any> ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.Wallet();
  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

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
