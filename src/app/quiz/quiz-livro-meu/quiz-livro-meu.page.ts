import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-livro-meu',
  templateUrl: './quiz-livro-meu.page.html',
  styleUrls: ['./quiz-livro-meu.page.scss'],
})
export class QuizLivroMeuPage implements OnInit {

  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Whale', 'Giraffe'],
      answer: 'Whale'
    }
  ];

  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];
  selectedAnswer: string | null;
  correctAnswers = 0;


  constructor() {
    this.selectedAnswer = null;
  }

  ngOnInit() {
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  checkAnswer() {
    if (this.selectedAnswer === this.currentQuestion.answer) {
      this.correctAnswers++;
      alert('Resposta Correta!');
    } else {
      alert('Resposta errada! A resposta certa é: ' + this.currentQuestion.answer);
    }

    // Próxima Questão
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = null; // Limpa a seleção de alternativa
    } else {
      this.showQuizResult();
    }
  }

  showQuizResult() {
    const totalQuestions = this.questions.length;
    const resultMessage = `Você acertou ${this.correctAnswers} / ${totalQuestions}`;
    alert(resultMessage);
  }
}
