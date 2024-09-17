import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-gun-powder',
  templateUrl: './gun-powder.component.html',
  styleUrls: ['./gun-powder.component.scss']
})
export class GunPowderComponent {

  constructor(private locationService: NavigationService) { }

  previousPage() {
    this.locationService.goBack();
  }
}
