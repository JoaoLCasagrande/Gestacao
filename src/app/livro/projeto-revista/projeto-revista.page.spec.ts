import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoRevistaPage } from './projeto-revista.page';

describe('ProjetoRevistaPage', () => {
  let component: ProjetoRevistaPage;
  let fixture: ComponentFixture<ProjetoRevistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjetoRevistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
