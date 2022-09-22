import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { HomeComponent } from './home/home.component';
import { ApiRestService } from './api-rest.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CharacterListComponent,
    LocationListComponent,
    EpisodeListComponent,
    CharacterDetailComponent,
    LocationDetailComponent,
    EpisodeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [ApiRestService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
