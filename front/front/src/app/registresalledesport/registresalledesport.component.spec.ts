import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistresalledesportComponent } from './registresalledesport.component';

describe('RegistresalledesportComponent', () => {
  let component: RegistresalledesportComponent;
  let fixture: ComponentFixture<RegistresalledesportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistresalledesportComponent]
    });
    fixture = TestBed.createComponent(RegistresalledesportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
