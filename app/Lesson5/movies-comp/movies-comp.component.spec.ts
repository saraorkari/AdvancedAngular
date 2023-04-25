import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCompComponent } from './movies-comp.component';

describe('MoviesCompComponent', () => {
  let component: MoviesCompComponent;
  let fixture: ComponentFixture<MoviesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
