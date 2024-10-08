import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physics-list',
  templateUrl: './physics-list.component.html',
  styleUrls: ['./physics-list.component.scss']
})
export class PhysicsListComponent {

  constructor(private router: Router) {}
  earthlist = [
    { image: '../../../../assets/relativity-title.webp', title: 'Work of Realativity', urlLink: 'relativity'},
    { image: '../../../../assets/rocket-propul.png', title: 'How to Rockets works?', urlLink: 'rocket-propulsion'},
    { image: '../../../../assets/winds.jpg', title: 'Methane & Information about it', urlLink: ''}
  ]

  navigate(index: any) {
    if(index && index.urlLink) {
      this.router.navigate(['/app/'+index.urlLink])
    }
  }
  
}
