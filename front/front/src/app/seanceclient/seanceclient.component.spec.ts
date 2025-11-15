import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceclientComponent } from './seanceclient.component';

describe('SeanceclientComponent', () => {
  let component: SeanceclientComponent;
  let fixture: ComponentFixture<SeanceclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceclientComponent]
    });
    fixture = TestBed.createComponent(SeanceclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
