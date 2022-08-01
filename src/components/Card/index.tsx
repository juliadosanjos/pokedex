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
            <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <h2>Peso: {pokemon.weight.toString()}</h2>
            <h2>Habilidade: {pokemon.abilities.map(({ability}) => {
                return ability.name
            }
                
            )}
            </h2>
            
        </CardStyled>
    </CardContainerStyled>
    )
}

export default Card