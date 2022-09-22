import { Component, OnInit } from '@angular/core';
import { ApiRestService, location } from '../api-rest.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locationList: location[] = [];
  nextPage: string | undefined = "";

  constructor(private API: ApiRestService) { }

  ngOnInit(): void {
    this.API.getLocationList().subscribe((response) => {
      this.locationList = response.results;
      this.nextPage = response.info.next;
    });
  }

  onScroll() {
    if(this.nextPage){
      this.API.getLocationList(this.nextPage).subscribe((response) => {
        this.locationList = this.locationList.concat(response.results);      
        this.nextPage = response.info.next;
      });
    }
  }

}
