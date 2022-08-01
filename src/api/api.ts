import axios, { AxiosResponse } from "axios";
import { PokemonGetDataResponse, PokemonGetResponse, PokemonSearchResponse } from "../interfaces/pokemon";

export const searchPokemon = (pokemon: String): Promise<AxiosResponse<PokemonSearchResponse>> => 
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

export const getPokemons = (limit: Number = 100, offset: Number = 0): Promise<AxiosResponse<PokemonGetResponse>> => 
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

export const getPokemonsData = (url): Promise<AxiosResponse<PokemonSearchResponse>> => 
  axios.get(url)
