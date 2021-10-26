import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgoComponent } from './sort-algo.component';

describe('SortAlgoComponent', () => {
  let component: SortAlgoComponent;
  let fixture: ComponentFixture<SortAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
