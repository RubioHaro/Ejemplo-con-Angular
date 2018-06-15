import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-general',
  templateUrl: './mapa-general.component.html',
  styleUrls: ['./mapa-general.component.css']
})
export class MapaGeneralComponent implements OnInit {
  
  lat: number = 19.416406;
  lng: number = -99.1651395;

  constructor() { }

  ngOnInit() {
  }

}
