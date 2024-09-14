import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss']
})
export class ViewEncapsulationComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }
}
