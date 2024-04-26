import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo-um',
  templateUrl: './capitulo-um.page.html',
  styleUrls: ['./capitulo-um.page.scss'],
})
export class CapituloUmPage implements OnInit {

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
