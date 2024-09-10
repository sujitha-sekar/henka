import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrls: ['./methane.component.scss']
})
export class MethaneComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }
  
}
