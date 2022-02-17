

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../../data.service';
import { checkProductsComponent } from './checkProducts.component';
import {checkProductsService} from './checkProducts.service';

describe('checkProductsComponent', () => {
  let component: checkProductsComponent;
  let fixture: ComponentFixture<checkProductsComponent>;

  let mockcheckProductsService;
  let mockDataService

  beforeEach(async(() => {

    mockcheckProductsService = sinon.createStubInstance(checkProductsService);
    mockcheckProductsService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ checkProductsComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: checkProductsService, useValue: mockcheckProductsService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(checkProductsComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

