import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  places: string = 'http://localhost:3000/markers';

  constructor(private http: HttpClient) {
  }

  makePlacesMarkers(map: L.map, type): void {
    this.http.get(this.places).subscribe((res: any) => {
      for (const c of res) {
        if (c.type == type){
          const lat = c.coordinates[0];
          const lon = c.coordinates[1];
          const marker = L.marker([lon, lat]).addTo(map);
          marker.bindPopup(`<center>
                              <p>
                                <strong>${c.name}</strong>
                              </p>
                            </center>
                            <img style="max-width: -webkit-fill-available;" src="${c.image}"/><br />
                            <p>${c.description}</p>
                              `).openPopup();
        }
        else if (type == "all")
        {
          const lat = c.coordinates[0];
          const lon = c.coordinates[1];
          const marker = L.marker([lon, lat]).addTo(map);
          marker.bindPopup(`<center>
                              <p>
                                <strong>${c.name}</strong>
                              </p>
                            </center>
                            <img style="max-width: -webkit-fill-available;" src="${c.image}"/><br />
                            <p>${c.description}</p>
                              `).openPopup();
        }
      }
    });
  }
}
