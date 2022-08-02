/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { PokemonForm, PokemonGetDataResponse, PokemonGetResponse, PokemonSearchResponse } from "../../interfaces/pokemon"
import Card from "../Card";
import { LoadingStyled, PokedexContainer } from "./styles";

interface PokedexProps {
    pokemonsList: PokemonSearchResponse[];
    loading: boolean;
}

const Pokedex = (props: PokedexProps) => {
    const { pokemonsList, loading } = props
    
    return (
        <PokedexContainer>
            {loading ? (
                <LoadingStyled>
                    <img src="https://i.gifer.com/Yg6z.gif" alt="loading" />
                </LoadingStyled>
            ) : (
                <>
                    {pokemonsList && pokemonsList.map((pokemon: PokemonSearchResponse, index: Number) => {
                        return (
                            <Card key={index.toString()} pokemon={pokemon}></Card>
                        )
                    })}
                </>
            )
            }
        </PokedexContainer>
    )
}

export default Pokedex