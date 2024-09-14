import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.scss']
})
export class AngularListComponent {
  constructor(private router: Router) {}
  earthlist = [
    { image: '../../../../assets/angular-history.png', title: 'The History of Angular', urlLink: 'angular-history'},
    { image: '../../../../assets/viewencapulation-text.png', title: 'Style Scoping in Angular', urlLink: 'view-encapsulation'},
    { image: '../../../../assets/winds.jpg', title: 'What Makes the Wind Blow?', urlLink: ''},
  ]

  navigate(index: any) {
    if(index && index.urlLink) {
      this.router.navigate(['/app/'+index.urlLink])
    }
  }
}
