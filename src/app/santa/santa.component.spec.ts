import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaComponent } from './santa.component';

describe('SantaComponent', () => {
  let component: SantaComponent;
  let fixture: ComponentFixture<SantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
