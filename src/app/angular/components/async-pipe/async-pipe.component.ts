import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  constructor(private locationService: NavigationService) {}

  previousPage() {
    this.locationService.goBack();
  }

  asyncpipe = [
    {content: 'The async pipe in Angular is used to subscribe to an Observable or Promise and automatically display the emitted value in the template.'},
    {content: 'It keeps the template updated with the latest emitted value, and when a new value is emitted, it marks the component for change detection, ensuring that the UI is updated accordingly.'},
    {content: 'It also handles the unsubscription from the Observable automatically when the component is destroyed, which helps prevent memory leaks.'}
  ]
}
