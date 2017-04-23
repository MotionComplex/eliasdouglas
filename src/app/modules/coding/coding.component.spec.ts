/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodingComponent } from './coding.component';

describe('CodingComponent', () => {
  let component: CodingComponent;
  let fixture: ComponentFixture<CodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
