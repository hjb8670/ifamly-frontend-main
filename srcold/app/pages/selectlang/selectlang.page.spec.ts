import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectlangPage } from './selectlang.page';

describe('SelectlangPage', () => {
  let component: SelectlangPage;
  let fixture: ComponentFixture<SelectlangPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectlangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
