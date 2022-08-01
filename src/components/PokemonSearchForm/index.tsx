import { ChangeEvent } from "react";
import { Button, InputContainerStyled, InputStyled } from "./styles"

interface PokemonSearchFormProps {
    onChange: (pokemon: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

const PokemonSearchForm = ({ onChange, onSubmit }: PokemonSearchFormProps) => {
    return (
        <InputContainerStyled>
            <InputStyled 
                placeholder="Buscar"
                onChange={onChange}
            />
            <Button onClick={onSubmit}>
                Buscar
            </Button>
        </InputContainerStyled>
    )
}

export default PokemonSearchForm