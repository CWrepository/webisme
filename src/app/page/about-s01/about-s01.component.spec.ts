import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS01Component } from './about-s01.component';

describe('AboutS01Component', () => {
  let component: AboutS01Component;
  let fixture: ComponentFixture<AboutS01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutS01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutS01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
