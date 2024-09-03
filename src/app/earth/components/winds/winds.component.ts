import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-winds',
  templateUrl: './winds.component.html',
  styleUrls: ['./winds.component.scss']
})
export class WindsComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }

}
