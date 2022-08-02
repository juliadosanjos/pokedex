/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { PokemonSearchResponse } from "../../interfaces/pokemon";
import { CardContainerStyled, CardStyled, InfoPokemon } from "./styles"
import bugLogo from "../../../public/assets/bug.png"
import grassLogo from "../../../public/assets/grass.png"
import { useState } from "react";
interface CardProps {
    pokemon: PokemonSearchResponse;
}

const Card = (props: CardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { pokemon } = props

    const expand = () => {
        const card = document.getElementById(pokemon.name)
        card.classList.toggle('card--expanded');
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <CardContainerStyled>
            <CardStyled id={pokemon.name} onClick={expand}>
                <div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
                <div>
                    <InfoPokemon isOpen={isOpen}>
                        <div>
                            <h2>TIPO</h2>
                        </div>
                        <div>
                            <p>
                                {pokemon.types.map((type) => {
                                    return `| ${type.type.name.toUpperCase()} |`
                                })}
                            </p>
                        </div>
                    </InfoPokemon>
                    <InfoPokemon isOpen={isOpen}>
                        {pokemon.stats.map((stats, index) => {
                            if (index < 3) {
                                return (<>
                                    <div key={index}>
                                        <h2>
                                            {stats.stat.name.toUpperCase()}
                                        </h2>
                                    </div>
                                    <div>
                                        <p>
                                            {stats.base_stat.toString()}
                                        </p>
                                    </div>
                                </>
                                )
                            }
                        })}
                    </InfoPokemon>

                </div>
            </CardStyled >

        </CardContainerStyled >
    )
}

export default Card