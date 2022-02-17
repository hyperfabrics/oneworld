

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../../data.service';
import { updateExemptedListComponent } from './updateExemptedList.component';
import {updateExemptedListService} from './updateExemptedList.service';

describe('updateExemptedListComponent', () => {
  let component: updateExemptedListComponent;
  let fixture: ComponentFixture<updateExemptedListComponent>;

  let mockupdateExemptedListService;
  let mockDataService

  beforeEach(async(() => {

    mockupdateExemptedListService = sinon.createStubInstance(updateExemptedListService);
    mockupdateExemptedListService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ updateExemptedListComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: updateExemptedListService, useValue: mockupdateExemptedListService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(updateExemptedListComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

