import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  constructor(private locationService: NavigationService) { }

  previousPage() {
    this.locationService.goBack();
  }

  asyncpipe = [
    { content: 'The async pipe in Angular is used to subscribe to an Observable or Promise and automatically display the emitted value in the template.' },
    { content: 'It keeps the template updated with the latest emitted value, and when a new value is emitted, it marks the component for change detection, ensuring that the UI is updated accordingly.' },
    { content: 'It also handles the unsubscription from the Observable automatically when the component is destroyed, which helps prevent memory leaks.' }
  ]

  promise = [
    { content: 'Emit a single value at a time (once the asynchronous operation is complete).' },
    { content: 'They execute immediately when created.' },
    { content: 'Not cancellable once execution starts.' },
    { content: 'Push errors to the next .catch() block.' }
  ]

  observable = [
    { content: 'Emit multiple values over time (can emit zero, one, or more values).' },
    { content: 'They are lazy, meaning they do not execute until they are subscribed to.' },
    { content: 'They can be cancelled by unsubscribing from them, which can prevent potential memory leaks or unnecessary operations.' },
    { content: 'Support operators like forEach, filter, map, retry, and others, enabling powerful data manipulation and transformation capabilities.' },
    { content: 'Allow error handling via error callbacks and can handle multiple asynchronous events over time.' }
  ]
}
