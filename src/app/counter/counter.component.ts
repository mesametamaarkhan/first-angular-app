import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;

  foo(type: string) {
    if(type === 'increment') {
      this.count++;
    }
    else if(type === 'decrement') {
      this.count--;
    }
    else {
      this.count = 0;
    }
  }
}
