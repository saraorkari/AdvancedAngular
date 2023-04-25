import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComp2Component } from './main-comp2.component';

describe('MainComp2Component', () => {
  let component: MainComp2Component;
  let fixture: ComponentFixture<MainComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
