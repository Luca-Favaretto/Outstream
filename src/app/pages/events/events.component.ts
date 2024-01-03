import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit(): void {}
}
