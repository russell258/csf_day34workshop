import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy{
  constructor(private fb: FormBuilder, private weatherSvc: WeatherService){}


ngOnDestroy(): void {

}

ngOnInit(): void {

}

private createForm(): FormGroup

}
