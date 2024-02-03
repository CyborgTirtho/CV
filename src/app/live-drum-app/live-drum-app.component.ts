import {
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-live-drum-app',
  templateUrl: './live-drum-app.component.html',
  styleUrls: ['./live-drum-app.component.css'],
})
export class LiveDrumAppComponent {
  listOfFile: any[] = [
    './assets/sounds/clap.wav',
    './assets/sounds/hihat.wav',
    './assets/sounds/kick.wav',
    './assets/sounds/openhat.wav',
    './assets/sounds/boom.wav',
    './assets/sounds/ride.wav',
    './assets/sounds/snare.wav',
    './assets/sounds/tom.wav',
    './assets/sounds/tink.wav',
  ];
  src: any;
  _audio = new Audio();
  btnele: any=['btn1','btn2','btn3','btn4','btn5','btn6','btn7','btn8','btn9'];
  constructor() {}

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.palyTheMusic(ev.key.toLocaleLowerCase());
  }

  palyTheMusic(ev: any) {
    switch (ev) {
      case '1': {        
        this._audio.src = this.listOfFile[0];
        this._audio.play();
        break;
      }
      case '2': {
        this._audio.src = this.listOfFile[1];
        this._audio.play();
        break;
      }
      case '3': {
        this._audio.src = this.listOfFile[2];
        this._audio.play();

        break;
      }
      case '4': {
        this._audio.src = this.listOfFile[3];
        this._audio.play();

        break;
      }
      case '5': {
        this._audio.src = this.listOfFile[4];
        this._audio.play();

        break;
      }
      case '6': {
        this._audio.src = this.listOfFile[5];
        this._audio.play();

        break;
      }
      case '7': {
        this._audio.src = this.listOfFile[6];
        this._audio.play();

        break;
      }
      case '8': {
        this._audio.src = this.listOfFile[7];
        this._audio.play();

        break;
      }
      case '9': {
        this._audio.src = this.listOfFile[8];
        this._audio.play();

        break;
      }

      case 'a': {
        this._audio.src = this.listOfFile[0];
        this._audio.play();
        break;
      }
      case 's': {
        this._audio.src = this.listOfFile[1];
        this._audio.play();
        break;
      }
      case 'd': {
        this._audio.src = this.listOfFile[2];
        this._audio.play();

        break;
      }
      case 'f': {
        this._audio.src = this.listOfFile[3];
        this._audio.play();

        break;
      }
      case 'g': {
        this._audio.src = this.listOfFile[4];
        this._audio.play();

        break;
      }
      case 'h': {
        this._audio.src = this.listOfFile[5];
        this._audio.play();

        break;
      }
      case 'j': {
        this._audio.src = this.listOfFile[6];
        this._audio.play();

        break;
      }
      case 'k': {
        this._audio.src = this.listOfFile[7];
        this._audio.play();

        break;
      }
      case 'l': {
        this._audio.src = this.listOfFile[8];
        this._audio.play();

        break;
      }
    }
  }
}
