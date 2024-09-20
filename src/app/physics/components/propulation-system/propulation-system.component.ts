import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-propulation-system',
  templateUrl: './propulation-system.component.html',
  styleUrls: ['./propulation-system.component.scss']
})
export class PropulationSystemComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }
  
}
