/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { PokemonSearchResponse } from "../../interfaces/pokemon";
import { CardContainerStyled, CardStyled } from "./styles"

interface CardProps {
    pokemon: PokemonSearchResponse;
}

const Card = (props: CardProps) => {
    const expand = () => {
        const card = document.getElementById(pokemon.name)
        card.classList.toggle('card--expanded');
        console.log('Clicou!')
    }

    const { pokemon } = props
    return (
        <CardContainerStyled>
            <CardStyled id={pokemon.name} onClick={expand}>
                <div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
                <div className="infoPokemon">
                    <p>
                        Tipo: {pokemon.types.map((type) => {
                            return `| ${type.type.name} |`
                        })}
                    </p>
                </div>
            </CardStyled>

        </CardContainerStyled>
    )
}

export default Card