import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  public getCharacterList(url?:string) {
    if(url){
      return this.http.get<getListCharacter>(url);
    }else{
      return this.http.get<getListCharacter>('https://rickandmortyapi.com/api/character');
    }
  }

  public getCharacterDetail(id:number) {
    return this.http.get<character>('https://rickandmortyapi.com/api/character/'+id);
  }

  public searchCharacter(param?: string) {
    return this.http.get<getListCharacter>('https://rickandmortyapi.com/api/character/?'+param);
  }

  public getLocationList(url?:string) {
    if(url){
      return this.http.get<getListLocation>(url);
    }else{
      return this.http.get<getListLocation>('https://rickandmortyapi.com/api/location');
    }
  }

  public getEpisodeList(url?:string) {
    if(url){
      return this.http.get<getListEpisode>(url);
    }else{
      return this.http.get<getListEpisode>('https://rickandmortyapi.com/api/episode');
    }
  }

}

interface getListCharacter {
  results: character[];
  info: {
    count: number;
    next?: string;
    pages: number;
    prev?: string;
  };
}

interface getListLocation {
  results: location[];
  info: {
    count: number;
    next?: string;
    pages: number;
    prev?: string;
  };
}

interface getListEpisode {
  results: episode[];
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

export interface location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

export interface episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
