import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsalleComponent } from './listsalle.component';

describe('ListsalleComponent', () => {
  let component: ListsalleComponent;
  let fixture: ComponentFixture<ListsalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsalleComponent]
    });
    fixture = TestBed.createComponent(ListsalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
