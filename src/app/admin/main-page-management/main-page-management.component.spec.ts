import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageManagementComponent } from './main-page-management.component';

describe('MainPageManagementComponent', () => {
  let component: MainPageManagementComponent;
  let fixture: ComponentFixture<MainPageManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
