import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesouhaitComponent } from './listesouhait.component';

describe('ListesouhaitComponent', () => {
  let component: ListesouhaitComponent;
  let fixture: ComponentFixture<ListesouhaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesouhaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesouhaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
