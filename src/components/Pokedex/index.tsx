/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { PokemonForm, PokemonGetDataResponse, PokemonGetResponse, PokemonSearchResponse } from "../../interfaces/pokemon"
import Card from "../Card";
import { PokedexStyled } from "./styles";

interface PokedexProps {
    pokemonsList: PokemonSearchResponse[];
    loading: boolean;
}

const Pokedex = (props: PokedexProps) => {
    const { pokemonsList, loading } = props
    
    return (
        <div>
            {loading ? (
                <div>Carregando</div>
            ) : (
                <PokedexStyled>
                    {pokemonsList && pokemonsList.map((pokemon: PokemonSearchResponse, index: Number) => {
                        return (
                            <Card key={index.toString()} pokemon={pokemon}></Card>
                        )
                    })}
                </PokedexStyled>
            )
            }
        </div>
    )
}

export default Pokedex

function loadCard() {
    throw new Error("Function not implemented.");
}
