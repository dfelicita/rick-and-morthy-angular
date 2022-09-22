import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { HomeComponent } from './home/home.component';
import { LocationListComponent } from './location-list/location-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'location-list', component: LocationListComponent },
  { path: 'episode-list', component: EpisodeListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
