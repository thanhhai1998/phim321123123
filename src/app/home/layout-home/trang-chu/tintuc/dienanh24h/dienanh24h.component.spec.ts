import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dienanh24hComponent } from './dienanh24h.component';

describe('Dienanh24hComponent', () => {
  let component: Dienanh24hComponent;
  let fixture: ComponentFixture<Dienanh24hComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dienanh24hComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dienanh24hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
