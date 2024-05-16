/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-nutricao',
  templateUrl: './quiz-nutricao.page.html',
  styleUrls: ['./quiz-nutricao.page.scss'],
})
export class QuizNutricaoPage implements OnInit {

  questions = [
    {
      question: 'Gestante tem que comer por dois?​',
      options: ['Verdadeiro','Falso'],
      answer: 'Falso'
    },
    {
      question: 'Gestantes devem evitar alguns adoçantes?​',
      options: ['Verdadeiro','Falso'],
      answer: 'Verdadeiro'
    }
  ];

  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];
  selectedAnswer: string | null;
  correctAnswers = 0;

  constructor(private navCtrl: NavController, private alertController: AlertController) {
    this.selectedAnswer = null;
  }

  ngOnInit() {
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  async checkAnswer() {
    let alertMessage;
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (this.selectedAnswer === currentQuestion.answer) {
      this.correctAnswers++;
      alertMessage = 'Resposta Correta!';
    } else {
      alertMessage = 'Resposta Errada! A resposta correta é: ' + currentQuestion.answer;
    }

    let customMessage = '';

    // Aqui você pode definir mensagens personalizadas para cada pergunta
    switch(this.currentQuestionIndex) {
      case 0:
        customMessage = 'Durante a gestação, o aumento das necessidades de vitaminas e minerais é maior do que as energéticas. Por isso, comer em dobro não é indicado e, inclusive, pode resultar em complicações se houver um ganho de peso muito acima do recomendado.​';
        break;
      case 1:
        customMessage = 'A sacarina e o ciclamato devem ser evitados durante a gestação devido a limitação de informações sobre o potencial carcinogênico, o uso na gestação e os efeitos sobre o feto. Assim, caso necessário fazer o uso, é preferível recorrer a outros tipos de adoçantes, como o aspartame ou estévia.​';
        break;
      // Adicione mais cases conforme necessário para mais perguntas
      default:
        customMessage = 'Mensagem padrão para perguntas adicionais';
    }

    const alert = await this.alertController.create({
      header: alertMessage,
      message: customMessage,
      buttons: ['OK']
    });

    await alert.present();

    // Limpa a seleção antes de ir para a próxima pergunta
  this.selectedAnswer = null;

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

    // Redirecionar para a página de exemplo
    this.navCtrl.navigateForward('fim-quiz');
  }

}
