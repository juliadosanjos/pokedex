/* eslint-disable @next/next/no-img-element */
import { CardStyled } from "./styles"

interface CardProps {
    pokemonName: String;
}

const Card = (props) => {
    const { pokemonName } = props
    return (
        <CardStyled>
            {pokemonName}
        </CardStyled>
    )
}

export default Card