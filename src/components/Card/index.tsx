/* eslint-disable @next/next/no-img-element */
import { PokemonSearchResponse } from "../../interfaces/pokemon";
import { CardContainerStyled, CardStyled } from "./styles"

interface CardProps {
    pokemon: PokemonSearchResponse;
}

const Card = (props: CardProps) => {
    const { pokemon } = props
    return (
        <CardContainerStyled>
            <CardStyled>
                <div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
            </CardStyled>
        </CardContainerStyled>
    )
}

export default Card