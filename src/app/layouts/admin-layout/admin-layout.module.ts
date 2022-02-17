import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';


///participants
/////////////////

//Suppliers
import { SupplierComponent } 				from '../../participants/suppliers/Supplier.component';
import { SupplierEditComponent } 		from '../../participants/suppliers/supplier-edit/Supplier-edit.component';
import { SupplierDetailComponent } 	from '../../participants/suppliers/supplier-detail/Supplier-detail.component';
import { SupplierListComponent } 	from '../../participants/suppliers/supplier-list/Supplier-list.component';
import { SupplierItemComponent } 	from '../../participants/suppliers/supplier-list/supplier-item/Supplier-item.component';

//Importers
import { ImporterComponent } 				from '../../participants/importers/Importer.component';
import { ImporterEditComponent } 		from '../../participants/importers/importer-edit/Importer-edit.component';
import { ImporterDetailComponent } 	from '../../participants/importers/importer-detail/Importer-detail.component';
import { ImporterListComponent } 	from '../../participants/importers/importer-list/Importer-list.component';
import { ImporterItemComponent } 	from '../../participants/importers/importer-list/importer-item/Importer-item.component';

//Retailers
import { RetailerComponent } 				from '../../participants/retailers/Retailer.component';
import { RetailerEditComponent } 		from '../../participants/retailers/retailer-edit/Retailer-edit.component';
import { RetailerDetailComponent } 	from '../../participants/retailers/retailer-detail/Retailer-detail.component';
import { RetailerListComponent } 	from '../../participants/retailers/retailer-list/Retailer-list.component';
import { RetailerItemComponent } 	from '../../participants/retailers/retailer-list/retailer-item/Retailer-item.component';

//Partners
import { PartnerComponent } 				from '../../participants/partners/Partner.component';
import { PartnerEditComponent } 		from '../../participants/partners/partner-edit/Partner-edit.component';
import { PartnerDetailComponent } 	from '../../participants/partners/partner-detail/Partner-detail.component';
import { PartnerListComponent } 		from '../../participants/partners/partner-list/Partner-list.component';
import { PartnerItemComponent } 		from '../../participants/partners/partner-list/partner-item/Partner-item.component';

//Regulators
import { RegulatorComponent } 			from '../../participants/regulators/Regulator.component';
import { RegulatorEditComponent } 	from '../../participants/regulators/regulator-edit/Regulator-edit.component';
import { RegulatorDetailComponent } from '../../participants/regulators/regulator-detail/Regulator-detail.component';
import { RegulatorListComponent } 	from '../../participants/regulators/regulator-list/Regulator-list.component';
import { RegulatorItemComponent } 	from '../../participants/regulators/regulator-list/regulator-item/Regulator-item.component';

//LContractistings
import { ProductListingContractComponent } 				from '../../productListingContracts/ProductListingContract.component';
import { ProductListingContractEditComponent } 		from '../../productListingContracts/productListingContract-edit/ProductListingContract-edit.component';
import { ProductListingContractDetailComponent } 	from '../../productListingContracts/productListingContract-detail/ProductListingContract-detail.component';
import { ProductListingContractListComponent } 		from '../../productListingContracts/productListingContract-list/ProductListingContract-list.component';
import { ProductListingContractItemComponent } 		from '../../productListingContracts/productListingContract-list/productListingContract-item/ProductListingContract-item.component';


import { createProductListingComponent } 		from '../../actions/createProductListing/createProductListing.component';
import { transferListingComponent } 				from '../../actions/transferListing/transferListing.component';
import { checkProductsComponent } 					from '../../actions/checkProducts/checkProducts.component';
import { regulatorAuditComponent } 					from '../../actions/regulatorAudit/regulatorAudit.component';
import { updateExemptedListComponent } 			from '../../actions/updateExemptedList/updateExemptedList.component';
import { DropdownDirective } from '../../shared/dropdown.directive';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

	  SupplierComponent,
		SupplierEditComponent,
		SupplierDetailComponent,
		SupplierListComponent,
		SupplierItemComponent,

		ImporterComponent,
		ImporterEditComponent,
		ImporterDetailComponent,
		ImporterListComponent,
		ImporterItemComponent,

		RetailerComponent,
		RetailerEditComponent,
		RetailerDetailComponent,
		RetailerListComponent,
		RetailerItemComponent,

    PartnerComponent,
		PartnerEditComponent,
		PartnerDetailComponent,
		PartnerListComponent,
		PartnerItemComponent,

		RegulatorComponent,
		RegulatorEditComponent,
		RegulatorDetailComponent,
		RegulatorListComponent,
		RegulatorItemComponent,

		ProductListingContractComponent,
		ProductListingContractEditComponent,
		ProductListingContractDetailComponent,
		ProductListingContractListComponent,
		ProductListingContractItemComponent,

		ProductListingContractComponent,
    createProductListingComponent,
    transferListingComponent,
    checkProductsComponent,
    regulatorAuditComponent,
    updateExemptedListComponent,
    DropdownDirective

  ],
  providers: [
    //  AuthService,
    // AuthGuard,
		// Configuration,
    // DataService
  ]
})

export class AdminLayoutModule {}
