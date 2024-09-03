import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-green-house-gas',
  templateUrl: './green-house-gas.component.html',
  styleUrls: ['./green-house-gas.component.scss']
})
export class GreenHouseGasComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }

}
