import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizLivroMeuPage } from './quiz-livro-meu.page';

describe('QuizLivroMeuPage', () => {
  let component: QuizLivroMeuPage;
  let fixture: ComponentFixture<QuizLivroMeuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuizLivroMeuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
