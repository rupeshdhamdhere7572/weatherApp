import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherserviceService } from './services/weatherservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherserviceService) {

  }
  cityName: string = 'chicago';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  OnSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
