import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginTeamComponent } from './origin-team.component';

describe('OriginTeamComponent', () => {
  let component: OriginTeamComponent;
  let fixture: ComponentFixture<OriginTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
