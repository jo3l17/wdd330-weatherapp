import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-city-temp',
  templateUrl: './city-temp.component.html',
  styleUrls: ['./city-temp.component.scss']
})
export class CityTempComponent implements OnInit {
  @Input() city;
  @Output() deleteCityEmit: EventEmitter<string> = new EventEmitter();
  @Output() favoritesCityEmit: EventEmitter<any> = new EventEmitter();
  @Input() temperature;
  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCity(): void {
    this.deleteCityEmit.emit(this.city.name);
  }

  favoritesCity(value): void {
    this.favoritesCityEmit.emit({ city: this.city.name, val: value });
  }
}
