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
    { image: '../../../../assets/gun-powder-text.png', title: 'How to make Gun Powder?', urlLink: 'gun-powder'},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''}
  ]

  navigate(index: any) {
    if(index && index.urlLink) {
      this.router.navigate(['/app/'+index.urlLink])
    }
  }
}
