

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../../data.service';
import { transferListingComponent } from './transferListing.component';
import {transferListingService} from './transferListing.service';

describe('transferListingComponent', () => {
  let component: transferListingComponent;
  let fixture: ComponentFixture<transferListingComponent>;

  let mocktransferListingService;
  let mockDataService

  beforeEach(async(() => {

    mocktransferListingService = sinon.createStubInstance(transferListingService);
    mocktransferListingService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ transferListingComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: transferListingService, useValue: mocktransferListingService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(transferListingComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

