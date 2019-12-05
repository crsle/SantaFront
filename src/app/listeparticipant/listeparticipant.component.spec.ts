import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparticipantComponent } from './listeparticipant.component';

describe('ListeparticipantComponent', () => {
  let component: ListeparticipantComponent;
  let fixture: ComponentFixture<ListeparticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeparticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
