import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',

  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  constructor() {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {}
}
