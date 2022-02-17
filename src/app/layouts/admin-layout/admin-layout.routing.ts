import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';


import { SupplierComponent } 				from '../../participants/suppliers/Supplier.component';
import { SupplierEditComponent } 		from '../../participants/suppliers/supplier-edit/Supplier-edit.component';
import { SupplierDetailComponent } 	from '../../participants/suppliers/supplier-detail/Supplier-detail.component';

//Importers
import { ImporterComponent } 				from '../../participants/importers/Importer.component';
import { ImporterEditComponent } 		from '../../participants/importers/importer-edit/Importer-edit.component';
import { ImporterDetailComponent } 	from '../../participants/importers/importer-detail/Importer-detail.component';

//Retailers
import { RetailerComponent } 				from '../../participants/retailers/Retailer.component';
import { RetailerEditComponent } 		from '../../participants/retailers/retailer-edit/Retailer-edit.component';
import { RetailerDetailComponent } 	from '../../participants/retailers/retailer-detail/Retailer-detail.component';

//Partners
import { PartnerComponent } 				from '../../participants/partners/Partner.component';
import { PartnerEditComponent } 		from '../../participants/partners/partner-edit/Partner-edit.component';
import { PartnerDetailComponent } 	from '../../participants/partners/partner-detail/Partner-detail.component';

//Regulators
import { RegulatorComponent } 			from '../../participants/regulators/Regulator.component';
import { RegulatorEditComponent } 	from '../../participants/regulators/regulator-edit/Regulator-edit.component';
import { RegulatorDetailComponent } from '../../participants/regulators/regulator-detail/Regulator-detail.component';

//Actions
import { createProductListingComponent } 	from '../../actions/createProductListing/createProductListing.component';
import { transferListingComponent } 			from '../../actions/transferListing/transferListing.component';
import { checkProductsComponent } 				from '../../actions/checkProducts/checkProducts.component';
import { regulatorAuditComponent } 				from '../../actions/regulatorAudit/regulatorAudit.component';
import { updateExemptedListComponent } 		from '../../actions/updateExemptedList/updateExemptedList.component';

//Contracts
//LContractistings
import { ProductListingContractComponent } 				from '../../productListingContracts/ProductListingContract.component';

import { AuthGuard } from '../../shared/auth/auth-guard.service';




export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent,  canActivate: [AuthGuard]  },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'table-list',     component: TableListComponent,  canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent,  canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent,  canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent,  canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent,  canActivate: [AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent,  canActivate: [AuthGuard] },

    { path: 'supplier',
		component: SupplierComponent,
		canActivate: [AuthGuard],
		children: [
      { path: 'new',
        component: SupplierEditComponent,
        canActivate: [AuthGuard]
      },
      { path: ':id',
        component: SupplierDetailComponent
      },
      { path: ':id/edit',
        component: SupplierEditComponent,
        canActivate: [AuthGuard]
      },
    ]
	},
	{ path: 'importer',
		component: ImporterComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: 'new',
				component: ImporterEditComponent,
				canActivate: [AuthGuard]
			},
			{ path: ':id',
				component: ImporterDetailComponent
			},
			{ path: ':id/edit',
				component: ImporterEditComponent,
				canActivate: [AuthGuard]
			},
		]
	},
	{ path: 'retailer',
		component: RetailerComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: 'new',
				component: RetailerEditComponent,
				canActivate: [AuthGuard]
			},
			{ path: ':id',
				component: RetailerDetailComponent
			},
			{ path: ':id/edit',
				component: RetailerEditComponent,
				canActivate: [AuthGuard]
			},
		]
	},
	{ path: 'regulator',
		component: RegulatorComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: 'new',
				component: RegulatorEditComponent,
				canActivate: [AuthGuard]
			},
			{ path: ':id',
				component: RegulatorDetailComponent
			},
			{ path: ':id/edit',
				component: RegulatorEditComponent,
				canActivate: [AuthGuard]
			}
		]
	},
	{ path: 'partner',
		component: PartnerComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: 'new',
				component: PartnerEditComponent,
				canActivate: [AuthGuard]
			},
			{ path: ':id',
				component: PartnerDetailComponent
			},
			{ path: ':id/edit',
				component: PartnerEditComponent,
				canActivate: [AuthGuard]
			},
		]
	},
	{ path: 'productListingContract',
		component: ProductListingContractComponent,
		canActivate: [AuthGuard]
	},
	{ path: 'createProductListing', component: createProductListingComponent, canActivate: [AuthGuard] },
  { path: 'transferListing', component: transferListingComponent, canActivate: [AuthGuard] },
  { path: 'checkProducts', component: checkProductsComponent, canActivate: [AuthGuard]},
  { path: 'regulatorAudit', component: regulatorAuditComponent, canActivate: [AuthGuard]},
	{ path: 'updateExemptedList', component: updateExemptedListComponent, canActivate: [AuthGuard]},

];
