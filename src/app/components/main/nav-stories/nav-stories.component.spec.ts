import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStoriesComponent } from './nav-stories.component';

describe('NavStoriesComponent', () => {
  let component: NavStoriesComponent;
  let fixture: ComponentFixture<NavStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
