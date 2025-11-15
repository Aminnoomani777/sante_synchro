import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcategorieComponent } from './ajoutcategorie.component';

describe('AjoutcategorieComponent', () => {
  let component: AjoutcategorieComponent;
  let fixture: ComponentFixture<AjoutcategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutcategorieComponent]
    });
    fixture = TestBed.createComponent(AjoutcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
