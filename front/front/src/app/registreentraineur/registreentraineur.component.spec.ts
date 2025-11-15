import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreentraineurComponent } from './registreentraineur.component';

describe('RegistreentraineurComponent', () => {
  let component: RegistreentraineurComponent;
  let fixture: ComponentFixture<RegistreentraineurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreentraineurComponent]
    });
    fixture = TestBed.createComponent(RegistreentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
