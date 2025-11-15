import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsalledesportComponent } from './loginsalledesport.component';

describe('LoginsalledesportComponent', () => {
  let component: LoginsalledesportComponent;
  let fixture: ComponentFixture<LoginsalledesportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginsalledesportComponent]
    });
    fixture = TestBed.createComponent(LoginsalledesportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
