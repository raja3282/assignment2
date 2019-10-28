import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List22Page } from './list22.page';

describe('List22Page', () => {
  let component: List22Page;
  let fixture: ComponentFixture<List22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
