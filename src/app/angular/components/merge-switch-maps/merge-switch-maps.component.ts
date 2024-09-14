import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-merge-switch-maps',
  templateUrl: './merge-switch-maps.component.html',
  styleUrls: ['./merge-switch-maps.component.scss']
})
export class MergeSwitchMapsComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }
}
