import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieManagementComponent } from './list-movie-management.component';

describe('ListMovieManagementComponent', () => {
  let component: ListMovieManagementComponent;
  let fixture: ComponentFixture<ListMovieManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
