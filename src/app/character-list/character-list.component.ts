import { Component, OnInit } from '@angular/core';
import { ApiRestService, character } from '../api-rest.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList: character[] = [];
  nextPage: string | undefined = "";
  loading: boolean = false;
  genderSearch: string = "";
  statusSearch: string = "";
  nameSearch: string = "";
  nameSearchChanged: Subject<string> = new Subject<string>();

  constructor(private API: ApiRestService) {
    this.nameSearchChanged.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.nameSearch = value;
        this.searchCharacter();
      });
  }

  ngOnInit(): void {
    this.API.getCharacterList().subscribe((response) => {
        this.characterList = response.results;
        this.nextPage = response.info.next;
    });
  }

  onScroll() {
    if(this.nextPage){
      this.API.getCharacterList(this.nextPage).subscribe((response) => {
        this.characterList = this.characterList.concat(response.results);      
        this.nextPage = response.info.next;
      });
    }
  }

  searchCharacter() {
    this.loading = true;
    let query = '';

    if(this.nameSearch){
      query += 'name='+this.nameSearch;
    }

    if(this.genderSearch){
      query += this.nameSearch ? '&gender='+this.genderSearch : 'gender='+this.genderSearch;
    }

    if(this.statusSearch){
      query += this.nameSearch || this.genderSearch ? '&status='+this.statusSearch : 'status='+this.statusSearch;
    }

    this.API.searchCharacter(query).subscribe((response) => {
      console.log('query:', query, 'response:', response);
      this.characterList = response.results;
      this.nextPage = response.info.next;
      this.loading = false
    });
    
  }

}
