import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabonnementComponent } from './listabonnement.component';

describe('ListabonnementComponent', () => {
  let component: ListabonnementComponent;
  let fixture: ComponentFixture<ListabonnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListabonnementComponent]
    });
    fixture = TestBed.createComponent(ListabonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
