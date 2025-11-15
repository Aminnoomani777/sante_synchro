import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresentraineurComponent } from './listresentraineur.component';

describe('ListresentraineurComponent', () => {
  let component: ListresentraineurComponent;
  let fixture: ComponentFixture<ListresentraineurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListresentraineurComponent]
    });
    fixture = TestBed.createComponent(ListresentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
