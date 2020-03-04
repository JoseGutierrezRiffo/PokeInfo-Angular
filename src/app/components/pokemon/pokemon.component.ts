import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  pokemones: any = [];
  pokemonId;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemones().subscribe(data => {
      this.pokemones = data["results"];

      this.pokemones = this.pokemones.map(pokemon => {
        const image = this.getPokemonImage(pokemon.url);
        console.log(image)
        return {...pokemon, image};
      });
    });
  }

  getPokemon(pokemonUrl) {
    const getId = pokemonUrl.split("/")[6];
    console.log(getId);
    this.router.navigate([`/pokemon/${getId}`]);
  }

  getPokemonImage = (pokemonUrl) => {
    const getId = pokemonUrl.split("/")[6];
    return this.pokemonService.getPokemon(getId).subscribe(data => {
      return data['sprites']['front_default'];
    });
  }
}

