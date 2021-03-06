import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';


const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokemon/:pokemonId', component: PokemonInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
