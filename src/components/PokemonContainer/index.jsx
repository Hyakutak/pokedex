import axios from 'axios';
import { useEffect, useState  } from 'react';
import PokemonCard from '../PokemonCard/indes';
import Navbar from '../Navabar/index';

function ContainerPokemon() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for(var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    }

    const removeCard = (card) => {
        setPokemons(pokemons => pokemons.filter(item => item.data.id !== card))
    }

    const atualizaCard = (idCard, cardName) => () => {
        setPokemons(pokemons => pokemons.map((item) => {
            if (item.data.id === idCard) {
              return { ...item.data, name: cardName };
            }
        }))
    }

    const filterCards = (name) => {
        var filterPokemon = [];
        if(name === "") {
            getPokemons();
        }
        for(var i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filterPokemon.push(pokemons[i]);
            }
        }
        setPokemons(filterPokemon);
    }

    const addCards = (name) => {
        setPokemons(pokemons => [...pokemons, name])
    }

    const pokemon = pokemons.map(poke => (
        <div>
            <PokemonCard key={poke.data.id} id={poke.data.id} name={poke.data.name} image={poke.data.sprites.front_shiny} remover={removeCard} atualizar={atualizaCard} />
        </div>
    ));
    

    return (
        <div>
            <Navbar filter={filterCards} addCard={addCards} />
            {pokemon}
            
        </div>
    );
}

export default ContainerPokemon;