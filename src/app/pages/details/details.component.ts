import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';
import { Event } from 'src/app/service/event';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private eventSrv: EventsService, private route: ActivatedRoute) {}

  id: number = 0;
  event!: Event;

  ngOnInit() {
    const eventId = +this.route.snapshot.paramMap.get('id')!; // Converti l'id da stringa a numero
    if (eventId) {
      this.eventSrv.getEvent(eventId).subscribe((event) => {
        this.event = event[0]; // Se utilizzi il metodo getEvent restituito nell'esempio precedente
      });
    }
  }
}
