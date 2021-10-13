import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService, character } from '../api-rest.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  
  charDetail: character | undefined;

  constructor(private route:ActivatedRoute, private API: ApiRestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const { params } = paramMap;
      this.API.getCharacterDetail(params.id).subscribe((response) => {
        this.charDetail = response;
      });
    });
  }

}
