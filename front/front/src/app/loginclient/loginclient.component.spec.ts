import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginclientComponent } from './loginclient.component';

describe('LoginclientComponent', () => {
  let component: LoginclientComponent;
  let fixture: ComponentFixture<LoginclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginclientComponent]
    });
    fixture = TestBed.createComponent(LoginclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
