import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',

  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  constructor() {}
  @Input() images: number[] | string[] = [];

  ngOnInit(): void {
    console.log(this.images);
    this.images = this.images.map(
      (n) => `../../../assets/Page Presentation/${n}.jpg`
    );
  }
}
