

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as sinon from 'sinon';
import { DataService } from '../../data.service';
import { regulatorAuditComponent } from './regulatorAudit.component';
import {regulatorAuditService} from './regulatorAudit.service';

describe('regulatorAuditComponent', () => {
  let component: regulatorAuditComponent;
  let fixture: ComponentFixture<regulatorAuditComponent>;

  let mockregulatorAuditService;
  let mockDataService

  beforeEach(async(() => {

    mockregulatorAuditService = sinon.createStubInstance(regulatorAuditService);
    mockregulatorAuditService.getAll.returns([]);
    mockDataService = sinon.createStubInstance(DataService);

    TestBed.configureTestingModule({
      declarations: [ regulatorAuditComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: regulatorAuditService, useValue: mockregulatorAuditService },
        {provide: DataService, useValue: mockDataService },
      ]
    });

    fixture = TestBed.createComponent(regulatorAuditComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

