import { Component, AfterViewInit, Input } from '@angular/core';
import { MapService } from 'app/_services/map.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @Input() placeType: string;

  private map;

  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.makePlacesMarkers(this.map, this.placeType);
  }

  private initMap(): void {
    this.map = L.map('map').setView([32.339444, -6.360833], 16);     
      //   https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}
      //   https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      //   https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
      //  last one used https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      accessToken: 'pk.eyJ1IjoiZXJ3aW5yYXJlIiwiYSI6ImNrNW56eXkzdzExazIzanFwa3ptbmd2ZjQifQ.W-hmr4OR8LyBvM9j8AgSHw',
      id: 'mapbox/streets-v11'
    });

  tiles.addTo(this.map);
  }
 
}
