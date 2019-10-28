import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryPage } from './add-country.page';

describe('AddCountryPage', () => {
  let component: AddCountryPage;
  let fixture: ComponentFixture<AddCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
