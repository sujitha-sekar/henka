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
    { image: '../../../../assets/map-text.png', title: 'MergeMap Vs SwitchMap', urlLink: 'merge-vs-switch'},
    { image: '../../../../assets/async-pipe-text.png', title: 'The Purpose of Async Pipe', urlLink: 'async-pipe'},
  ]

  navigate(index: any) {
    if(index && index.urlLink) {
      this.router.navigate(['/app/'+index.urlLink])
    }
  }
}
