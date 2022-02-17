

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../../data.service';
import { createProductListingComponent } from './createProductListing.component';
import {createProductListingService} from './createProductListing.service';

describe('createProductListingComponent', () => {
  let component: createProductListingComponent;
  let fixture: ComponentFixture<createProductListingComponent>;

  let mockcreateProductListingService;
  let mockDataService

  beforeEach(async(() => {

    mockcreateProductListingService = sinon.createStubInstance(createProductListingService);
    mockcreateProductListingService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ createProductListingComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: createProductListingService, useValue: mockcreateProductListingService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(createProductListingComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

