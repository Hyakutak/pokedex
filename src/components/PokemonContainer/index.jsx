import axios from 'axios';
import { useEffect, useState  } from 'react';
import PokemonCard from '../PokemonCard/indes';
import Navbar from '../Navabar/index';
import AddPokemon from "./addPokemon";

import { ContainerPoke,
        Heading,
        TitleHeading,
        PokeContainer,
        ShowMoreButton } from "./PokemonContainer.elements";

function ContainerPokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [visible, setVisible] = useState(12);
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

    const ShowMore = () => {
        setVisible((value) => value + 8);
    }

    const pokemon = pokemons.slice(0, visible).map(poke => (
        <PokemonCard key={poke.id} id={poke.id} name={poke.name} image={poke.sprites.front_shiny} remover={removeCard} atualizar={atualizaCard} />
    ));
    

    return (
        <ContainerPoke>
            <Navbar filter={filterCards} />
            <Heading>
                <TitleHeading>Resultado de busca</TitleHeading>
                <AddPokemon addCard={addCards} />
            </Heading>
            <PokeContainer>
                {pokemon}
            </PokeContainer>
            <ShowMoreButton onClick={ShowMore}>Veja Mais</ShowMoreButton>
            
            
        </ContainerPoke>
    );
}

export default ContainerPokemon;