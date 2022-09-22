import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  public getCharacterList(url?:string) {
    if(url){
      return this.http.get<getList>(url);
    }else{
      return this.http.get<getList>('https://rickandmortyapi.com/api/character');
    }
  }

  public getCharacterDetail(id:number) {
    return this.http.get<character>('https://rickandmortyapi.com/api/character/'+id);
  }

  public searchCharacter(param?: string) {
    return this.http.get<getList>('https://rickandmortyapi.com/api/character/?'+param);
  }

}

interface getList {
  results: character[];
  info: {
    count: number;
    next?: string;
    pages: number;
    prev?: string;
  };
}

export interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
