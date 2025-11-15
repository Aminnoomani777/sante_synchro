import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierentraineurComponent } from './modifierentraineur.component';

describe('ModifierentraineurComponent', () => {
  let component: ModifierentraineurComponent;
  let fixture: ComponentFixture<ModifierentraineurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierentraineurComponent]
    });
    fixture = TestBed.createComponent(ModifierentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
