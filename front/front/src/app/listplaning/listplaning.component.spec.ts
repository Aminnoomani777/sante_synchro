import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplaningComponent } from './listplaning.component';

describe('ListplaningComponent', () => {
  let component: ListplaningComponent;
  let fixture: ComponentFixture<ListplaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListplaningComponent]
    });
    fixture = TestBed.createComponent(ListplaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
