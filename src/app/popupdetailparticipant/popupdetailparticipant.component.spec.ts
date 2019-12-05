import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupdetailparticipantComponent } from './popupdetailparticipant.component';

describe('PopupdetailparticipantComponent', () => {
  let component: PopupdetailparticipantComponent;
  let fixture: ComponentFixture<PopupdetailparticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupdetailparticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupdetailparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
