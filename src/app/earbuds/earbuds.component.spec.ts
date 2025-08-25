import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarbudsComponent } from './earbuds.component';

describe('EarbudsComponent', () => {
  let component: EarbudsComponent;
  let fixture: ComponentFixture<EarbudsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarbudsComponent]
    });
    fixture = TestBed.createComponent(EarbudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
