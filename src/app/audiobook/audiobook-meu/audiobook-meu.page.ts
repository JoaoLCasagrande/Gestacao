import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiobook-meu',
  templateUrl: './audiobook-meu.page.html',
  styleUrls: ['./audiobook-meu.page.scss'],
})
export class AudiobookMeuPage implements OnInit {

  playAudio() {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.play();
  }

  pauseAudio() {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.pause();
  }

  constructor() { }

  ngOnInit() {
  }

}
