import { Component, OnInit } from '@angular/core';
import { ApiRestService, character } from '../api-rest.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList: character[] = [];

  constructor(private API: ApiRestService) {

  }

  ngOnInit(): void {
    this.API.getCharacterList().subscribe((response) => {
        this.characterList = response.results;
    });
  }

}
