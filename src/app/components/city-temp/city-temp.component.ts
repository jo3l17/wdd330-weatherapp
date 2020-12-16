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

  deleteCity() {
    this.deleteCityEmit.emit(this.city.name);
  }

  favoritesCity(value) {
    this.favoritesCityEmit.emit({ city: this.city.name, val: value });
  }
}
