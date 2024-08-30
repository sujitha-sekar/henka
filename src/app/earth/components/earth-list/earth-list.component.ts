import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earth-list',
  templateUrl: './earth-list.component.html',
  styleUrls: ['./earth-list.component.scss']
})
export class EarthListComponent {

  constructor(private router: Router) {}
  earthlist = [
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: 'winds'},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
  ]

  navigate(index: any) {
    if(index && index.urlLink) {
      this.router.navigate(['/app/'+index.urlLink])
    }
  }

}
