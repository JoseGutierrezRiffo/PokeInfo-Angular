import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemones = () => {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0');
    }

  getPokemon = (pokemonId) => {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}


