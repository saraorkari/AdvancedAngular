import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultUsersComponent } from './adult-users.component';

describe('AdultUsersComponent', () => {
  let component: AdultUsersComponent;
  let fixture: ComponentFixture<AdultUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
