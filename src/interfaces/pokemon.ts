export interface PokemonSprites {
    front_default: string;
    versions: {
        'generation-v': {
            'black-white': {
                animated: {
                    front_default: string;
                }
            }
        }
    }
}


export interface PokemonTypes {
    slot: Number;
    type: {
        name: String;
    }
}

export interface PokemonStats {
    base_stat: Number;
    stat: {
        name: String;
    }
}

export interface PokemonAbility {
    ability: {
        name: String;
    }
}

export interface PokemonForm {
    name: String;
    url: String;
}

export interface PokemonSearchResponse {
    name: string;
    weight: Number;
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
    types: PokemonTypes[];
    stats: PokemonStats[];
}

export interface PokemonGetResponse {
    next: String;
    previous: String;
    results: PokemonForm[];
}

export interface PokemonGetDataResponse {
    name: String;
    weight: Number;
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
    // types: PokemonTypes[];
    // stats: PokemonStats[];
}