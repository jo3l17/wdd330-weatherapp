import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getJSON(url): Object {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setItemLS(key, value): void {
    localStorage.setItem(key, value)
  }
  getFromLS(key): string {
    return localStorage.getItem(key);
  }

  formatData(data, favorite = false): Object {
    const { main, name, sys, weather } = data;
    return {
      name,
      country: sys.country,
      icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]
        }.svg`,
      description: weather[0]["description"],
      temp: Math.round(main.temp),
      tempF: Math.round((main.temp * 9 / 5) + 32),
      favorite
    }
  }
}
