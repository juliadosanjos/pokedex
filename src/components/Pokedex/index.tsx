/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { PokemonForm, PokemonGetDataResponse, PokemonGetResponse, PokemonSearchResponse } from "../../interfaces/pokemon"
import Card from "../Card";

interface PokedexProps {
    pokemonsList: PokemonGetResponse;
    loading: boolean;
}

const Pokedex = (props: PokedexProps) => {
    const { pokemonsList, loading } = props
    
    return (
        <div>
            {loading ? (
                <div>Carregando</div>
            ) : (
                <div>
                    {pokemonsList && pokemonsList.results.map((pokemon: PokemonForm, index: Number) => {
                        return (
                            <Card key={index} pokemonName={pokemon.name}></Card>
                        )
                    })}
                </div>
            )
            }
        </div>
    )
}

export default Pokedex

function loadCard() {
    throw new Error("Function not implemented.");
}
