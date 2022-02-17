import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.stschain.chemicals{
   export abstract class Company extends Participant {
      companyID: string;
      companyName: string;
      companyActivity: string;
      employees: Person[];
      address: Address;
      identity: BusinessIdentity;
      civilDefenceNumber: string;
   }
   export abstract class Ministry extends Participant {
      ministryCode: string;
      ministryName: string;
      Employees: Person[];
      address: Address;
      identity: BusinessIdentity;
   }
   export abstract class B2B extends Participant {
      description: string;
   }
   export class Person {
      firstName: string;
      lastName: string;
      mobilePhone: string;
      jobFunction: string;
      clearanceLevel: string;
      identity: PersonalIdentity;
   }
   export class BusinessIdentity {
      id: string;
      idType: string;
      idHash: string;
      registrationDoc: string;
      registrationDocHash: string;
      registrationSignature: string;
      registrationSiginingAuth: string;
      identityExpiryDate: string;
   }
   export class PersonalIdentity {
      id: string;
      idType: string;
      idHash: string;
      registrationDoc: string;
      registrationDocHash: string;
      registrationSignature: string;
      registrationSiginingAuth: string;
      identityExpiryDate: string;
   }
   export class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      postalCode: string;
      zipCode: string;
      postOfficeBoxNumber: string;
   }
   export enum Status {
      INITIALREQUEST,
      EXEMPTCHECKREQ,
      HAZARDANALYSISCHECKREQ,
      CLASSIFIED,
      TOPSECRET,
      CHECKCOMPLETED,
      CANCELLED,
      REJECTED,
      WITHIMPORTER,
      PENDINGREGULATOR,
      DEFAULT,
      FRAUD,
      INCOMPLETE,
   }
   export class Product {
      productId: string;
      productName: string;
      productDescription: string;
      quantity: string;
      countryId: string;
   }
   export class Retailer extends Company {
      retailerId: string;
      products: Product[];
   }
   export class Importer extends Company {
      importerId: string;
   }
   export class Supplier extends Company {
      supplierId: string;
      countryId: string;
      orgId: string;
   }
   export class Partner extends B2B {
      url: string;
   }
   export class Regulator extends Ministry {
      regulatorId: string;
      exemptedOrgIds: string[];
      exemptedProductIds: string[];
   }
   export class ProductListingContract extends Asset {
      listingtId: string;
      status: Status;
      products: Product[];
      owner: Company;
      supplier: Supplier;
   }
   export class createProductListing extends Transaction {
      listingtId: string;
      status: Status;
      products: string[];
      company: Company;
   }
   export class transferListing extends Transaction {
      ownerType: string;
      newOwner: Company;
      productListing: ProductListingContract;
   }
   export class checkProducts extends Transaction {
      regulator: Regulator;
      productListing: ProductListingContract;
   }
   export class regulatorAudit extends Transaction {
      newStatus: Status;
      regulator: Regulator;
      productListing: ProductListingContract;
   }
   export class updateExemptedList extends Transaction {
      newExemptedOrgIds: string[];
      newExemptedProductIds: string[];
      regulator: Regulator;
   }
// }
