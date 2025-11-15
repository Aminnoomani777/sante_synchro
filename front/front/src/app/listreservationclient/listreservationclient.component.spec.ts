import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationclientComponent } from './listreservationclient.component';

describe('ListreservationclientComponent', () => {
  let component: ListreservationclientComponent;
  let fixture: ComponentFixture<ListreservationclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListreservationclientComponent]
    });
    fixture = TestBed.createComponent(ListreservationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
