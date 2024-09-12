import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-angular-history',
  templateUrl: './angular-history.component.html',
  styleUrls: ['./angular-history.component.scss']
})
export class AngularHistoryComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }
}
