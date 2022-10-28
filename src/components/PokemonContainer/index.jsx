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
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) =>{
           const pokemons = Array.from(res.map(pokemon =>{
            const extract = ({name, id, sprites}) => ({name, id, sprites});
            return extract(pokemon.data)
           }))
           setPokemons(pokemons);
        } )
    }
    
    const removeCard = (card) => {
        setPokemons(pokemons => pokemons.filter(item => item.id !== card))
    }

    const atualizaCard = (idCard, cardName) => {
        const att = pokemons.map((item) => {
            if (item.id === idCard) {
                const newItem = {...item};
                newItem.name = cardName
                return newItem;
            }
            return item
        })
        setPokemons(att)
    }

    const filterCards = (name) => {
        var filterPokemon = [];
        if(!name) {
            getPokemons();
        }
        for(var i in pokemons) {
            if(pokemons[i].name.includes(name)) {
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
            <PokemonCard key={poke.id} id={poke.id} name={poke.name} image={poke.sprites.front_shiny} remover={removeCard} atualizar={atualizaCard} />
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