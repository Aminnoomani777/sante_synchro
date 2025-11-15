import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginentraineurComponent } from './loginentraineur.component';

describe('LoginentraineurComponent', () => {
  let component: LoginentraineurComponent;
  let fixture: ComponentFixture<LoginentraineurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginentraineurComponent]
    });
    fixture = TestBed.createComponent(LoginentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
