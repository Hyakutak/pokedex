import axios from 'axios';
import { useEffect, useState  } from 'react';
import PokemonCard from '../PokemonCard/indes';

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

    const atualizaCard = (id, card) => (event) => {
        let newArr = pokemons.map((item, i) => {
            if (id === i.data.id) {
              return { ...pokemons, [card]: event.target.value };
            } else {
              return item;
            }
        });
        setPokemons(newArr);
    }

    const pokemon = pokemons.map(poke => (
        <div>
            <PokemonCard key={poke.data.id} id={poke.data.id} name={poke.data.name} image={poke.data.sprites.front_shiny} remover={removeCard} atualizar={atualizaCard} />
        </div>
    ));
    

    return (
        <div>
            {pokemon}
            
        </div>
    );
}

export default ContainerPokemon;