import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/service/event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() event!: Event;

  constructor() {}

  ngOnInit(): void {}
}
