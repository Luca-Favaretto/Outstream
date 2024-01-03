import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',

  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  constructor() {}

  images = [3, 4, 5, 6, 7, 8, 9].map(
    (n) => `../../../assets/Page Presentation/${n}.jpg`
  );
  ngOnInit(): void {}
}
