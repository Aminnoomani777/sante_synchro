import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercategorieComponent } from './modifiercategorie.component';

describe('ModifiercategorieComponent', () => {
  let component: ModifiercategorieComponent;
  let fixture: ComponentFixture<ModifiercategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiercategorieComponent]
    });
    fixture = TestBed.createComponent(ModifiercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
