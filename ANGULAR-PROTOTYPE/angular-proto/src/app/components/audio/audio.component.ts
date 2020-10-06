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
  slider: HTMLInputElement;

  sound = new Howl({
    src: ['./assets/arpeggggg.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() { 
      console.log('Finished!');
    }
  });

  constructor() { }

  ngOnInit(): void { 

    this.sound.play();
 
    console.log(this.sound); 
   
    this.slider = document.querySelector('.volume');
    console.log(this.slider); 
    this.slider.addEventListener("mouseup", this.changeVolume.bind(this));
   
  }
 
  changeVolume(){
   
    this.sound.volume = this.sliderValue/100;
    console.log(this.sound.volume);
    Howler.volume(this.sound.volume);
  }
}





