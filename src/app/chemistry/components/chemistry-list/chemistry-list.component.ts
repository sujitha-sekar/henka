import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chemistry-list',
  templateUrl: './chemistry-list.component.html',
  styleUrls: ['./chemistry-list.component.scss']
})
export class ChemistryListComponent {

  constructor(private router: Router) {}
  earthlist = [
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: 'winds'},
    { image: '../../../../assets/greenhouse_gas.png', title: 'Is Green house effect is good thing?', urlLink: 'green-house-gas'},
    { image: '../../../../assets/methane-title.jpg', title: 'Methane & Information about it', urlLink: 'methane'},
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
