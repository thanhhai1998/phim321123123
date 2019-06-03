import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRapPhimComponent } from './list-rap-phim.component';

describe('ListRapPhimComponent', () => {
  let component: ListRapPhimComponent;
  let fixture: ComponentFixture<ListRapPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRapPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRapPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
