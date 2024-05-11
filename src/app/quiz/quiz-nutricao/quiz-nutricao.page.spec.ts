import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizNutricaoPage } from './quiz-nutricao.page';

describe('QuizNutricaoPage', () => {
  let component: QuizNutricaoPage;
  let fixture: ComponentFixture<QuizNutricaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuizNutricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
