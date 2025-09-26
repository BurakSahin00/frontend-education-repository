import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddModal } from './category-add-modal';

describe('CategoryAddModal', () => {
  let component: CategoryAddModal;
  let fixture: ComponentFixture<CategoryAddModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryAddModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAddModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
