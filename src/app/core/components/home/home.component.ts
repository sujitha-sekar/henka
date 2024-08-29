import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedIndex = 0;

  data = [
    { imgUrl: '../../../../assets/fish.jpg', name: 'About Fish', description: 'Some fish, like clownfish, can change their gender during their lifetime' },
    { imgUrl: '../../../../assets/fox.jpg', name: 'Wolf', description: 'Wolves can communicate across distances of up to 10 miles by howling.' },
    { imgUrl: '../../../../assets/bird.jpg', name: 'Humming Bird', description: 'Hummingbirds are the only birds that can fly backward.' },
    { imgUrl: '../../../../assets/mount.jpg', name: 'Mount Everest', description: 'Mount Everest, the highest mountain on Earth, stands at 29,032 feet (8,848 meters) above sea level.' },
  ]

  ngOnInit() {
    this.slider()
  }

  slider() {
    setInterval(() => {
      if (this.data.length) {
        this.selectedIndex = (this.selectedIndex < (this.data && this.data.length-1)) ? ++this.selectedIndex : 0
      }
    },5000);
  }

}
