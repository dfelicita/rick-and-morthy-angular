import { Component, OnInit } from '@angular/core';
import { ApiRestService, episode } from '../api-rest.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  episodeList: episode[] = [];
  nextPage: string | undefined = "";

  constructor(private API: ApiRestService) { }

  ngOnInit(): void {
    this.API.getEpisodeList().subscribe((response) => {
      this.episodeList = response.results;
      this.nextPage = response.info.next;
    });
  }

  onScroll() {
    if(this.nextPage){
      this.API.getEpisodeList(this.nextPage).subscribe((response) => {
        this.episodeList = this.episodeList.concat(response.results);      
        this.nextPage = response.info.next;
      });
    }
  }
}
