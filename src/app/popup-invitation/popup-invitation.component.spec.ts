import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInvitationComponent } from './popup-invitation.component';

describe('PopupInvitationComponent', () => {
  let component: PopupInvitationComponent;
  let fixture: ComponentFixture<PopupInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
