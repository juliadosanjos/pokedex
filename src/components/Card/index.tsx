/* eslint-disable @next/next/no-img-element */
import { PokemonSearchResponse } from "../../interfaces/pokemon";
import { CardStyled } from "./styles"

interface CardProps {
    pokemon: PokemonSearchResponse;
}

const Card = (props: CardProps) => {
    const { pokemon } = props
    return (
        <CardStyled>
            <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
        </CardStyled>
    )
}

export default Card