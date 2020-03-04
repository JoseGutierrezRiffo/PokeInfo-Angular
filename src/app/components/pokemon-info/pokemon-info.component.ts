import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemon-info",
  templateUrl: "./pokemon-info.component.html",
  styleUrls: ["./pokemon-info.component.scss"]
})
export class PokemonInfoComponent implements OnInit {
  pokemonInfo: any = [];
  pokemonId;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.params.pokemonId;
    console.log("Aqui poke info", this.pokemonId);
    this.pokemonInfo = this.pokemonService
      .getPokemon(this.pokemonId)
      .subscribe(data => {
        console.log(data);
        return (this.pokemonInfo = data);
      });
  }
}
