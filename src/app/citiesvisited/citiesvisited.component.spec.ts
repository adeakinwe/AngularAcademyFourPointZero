import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesvisitedComponent } from './citiesvisited.component';

describe('CitiesvisitedComponent', () => {
  let component: CitiesvisitedComponent;
  let fixture: ComponentFixture<CitiesvisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesvisitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesvisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
