import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-relativity',
  templateUrl: './relativity.component.html',
  styleUrls: ['./relativity.component.scss']
})
export class RelativityComponent {

  isShow:boolean = false;

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }

}
