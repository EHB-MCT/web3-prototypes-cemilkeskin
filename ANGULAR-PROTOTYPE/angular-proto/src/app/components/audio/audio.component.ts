import { Component, OnChanges, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  path:string;
  sliderValue = 50;
  sliderRateValue = 1; 
  buttonValue:boolean = false;

  slider: HTMLInputElement;
  sliderRate: HTMLInputElement;
  button: HTMLInputElement;

  sound = new Howl({
    src: ['./assets/arpeggggg.mp3'],
    autoplay: true,
    volume: 0.5,
    loop: false,
    onend: function() { 
      console.log('Finished!');
    }
  });

  constructor() { }

  ngOnInit(): void { 

    Howler.volume(0.5);
    this.sound.play();

    console.log(this.sound); 
    this.slider = document.querySelector('.volume');
    this.button = document.querySelector('.button');
    this.sliderRate = document.querySelector('.rate');

    console.log(this.slider); 
    this.slider.addEventListener("mouseup", this.changeVolume.bind(this));
    this.sliderRate.addEventListener("mouseup", this.changeRate.bind(this));

    this.button.addEventListener("click", this.changeLoop.bind(this));
    console.log(this.buttonValue);
  }
  
  changeVolume(){
   
    this.sound.volume = this.sliderValue/100;
    console.log(this.sound.volume);
    Howler.volume(this.sound.volume);
  }

  changeRate(){
    this.sound.rate(this.sliderRateValue); 
    console.log(this.sound.rate);
  }

  changeLoop(){
    console.log("clicked");
    this.sound.loop(this.buttonValue);
    console.log(this.sound.loop);
    console.log(Howler);
  }
}





