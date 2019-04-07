import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftSideComponent } from './profile-left-side.component';

describe('ProfileLeftSideComponent', () => {
  let component: ProfileLeftSideComponent;
  let fixture: ComponentFixture<ProfileLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
