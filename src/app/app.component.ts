import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ImageDivComponent } from './image-div/image-div.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, ImageDivComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app-ghost';
}
