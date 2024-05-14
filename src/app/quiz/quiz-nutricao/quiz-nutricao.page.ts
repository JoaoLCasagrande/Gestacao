import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-nutricao',
  templateUrl: './quiz-nutricao.page.html',
  styleUrls: ['./quiz-nutricao.page.scss'],
})
export class QuizNutricaoPage implements OnInit {

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
  selectedAnswer: string;
  correctAnswers = 0;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  async checkAnswer() {
    const alert = await this.presentAlert();
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.modalController.create({
      header: 'Answer Result',
      message: this.selectedAnswer === this.currentQuestion.answer ? 'Correct answer!' : 'Wrong answer. The correct answer is: ' + this.currentQuestion.answer,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.presentModal();
          }
        }
      ]
    });
    return alert;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalContentPage,
      componentProps: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    });
    modal.onDidDismiss().then(() => {
      this.moveToNextQuestion();
    });
    return await modal.present();
  }

  moveToNextQuestion() {
    // Move to the next question
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = null; // Reset selected answer
    } else {
      this.redirectToFimQuizPage();
    }
  }

  redirectToFimQuizPage() {
    // Redirecionar para a página 'fim-quiz'
    // Código de redirecionamento para a página 'fim-quiz'
  }
}

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Modal Content
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      {{ text }}
    </ion-content>
  `
})
export class ModalContentPage {
  text: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
