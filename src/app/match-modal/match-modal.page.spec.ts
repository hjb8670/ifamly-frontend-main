import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchModalPage } from './match-modal.page';

describe('MatchModalPage', () => {
  let component: MatchModalPage;
  let fixture: ComponentFixture<MatchModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
