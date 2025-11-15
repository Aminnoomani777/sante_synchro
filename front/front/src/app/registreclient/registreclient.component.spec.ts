import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreclientComponent } from './registreclient.component';

describe('RegistreclientComponent', () => {
  let component: RegistreclientComponent;
  let fixture: ComponentFixture<RegistreclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreclientComponent]
    });
    fixture = TestBed.createComponent(RegistreclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
