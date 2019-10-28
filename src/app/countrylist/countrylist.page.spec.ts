import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylistPage } from './countrylist.page';

describe('CountrylistPage', () => {
  let component: CountrylistPage;
  let fixture: ComponentFixture<CountrylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
