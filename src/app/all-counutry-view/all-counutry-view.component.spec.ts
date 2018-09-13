import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCounutryViewComponent } from './all-counutry-view.component';

describe('AllCounutryViewComponent', () => {
  let component: AllCounutryViewComponent;
  let fixture: ComponentFixture<AllCounutryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCounutryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCounutryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
