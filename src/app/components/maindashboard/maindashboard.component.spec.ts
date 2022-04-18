import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindashboardComponent } from './maindashboard.component';

describe('MaindashboardComponent', () => {
  let component: MaindashboardComponent;
  let fixture: ComponentFixture<MaindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
