import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { Event } from 'src/app/service/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events!: Event[];
  constructor(private eventSrv: EventsService) {}

  ngOnInit() {
    this.eventSrv.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }
}
