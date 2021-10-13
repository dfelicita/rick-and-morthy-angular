import { Component, OnInit } from '@angular/core';
import { ApiRestService, character } from '../api-rest.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList: character[] = [];
  nextPage: string | undefined= "";

  constructor(private API: ApiRestService) {

  }

  ngOnInit(): void {
    this.API.getCharacterList().subscribe((response) => {
        this.characterList = response.results;
        this.nextPage = response.info.next;
    });
  }

  onScroll() {
    this.API.getCharacterList(this.nextPage).subscribe((response) => {
      this.characterList = this.characterList.concat(response.results);      
      this.nextPage = response.info.next;
    });
  }

}
