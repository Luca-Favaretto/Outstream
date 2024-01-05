import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { Event } from 'src/app/service/event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  searchResults: Event[] = [];
  constructor(private eventSrv: EventsService) {}

  ngOnInit(): void {
    this.eventSrv
      .getEvents()
      .subscribe((events) => (this.searchResults = events));
  }

  search() {
    this.eventSrv.searchEvents(this.searchQuery).subscribe((results) => {
      this.searchResults = results;
    });
  }
}
