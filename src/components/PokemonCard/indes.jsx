import { useEffect, useState  } from 'react';

function PokemonCard({ name, image, id, remover, atualizar } ) {
    const [cardPokemon, setcardPokemon] = useState({edit: false});
    const [cardName, setCardName] = useState({nameCard: name});

    const removerCard = () => {
        remover(id);
    }

    const alterarCard = () => {
        setcardPokemon({edit: true})
    }
    
    const atualizaCard = (evt) => {
        evt.preventDefault();
        atualizar(id, cardName.nameCard);
        setcardPokemon({edit: false});
    }

    const handleChange = (evt) => {
        setCardName({[evt.target.name]: evt.target.value})
    }

    const alterar = () => {
        let card;
        if(cardPokemon.edit) {
            card = (
                <form onSubmit={atualizaCard}>
                    <input value={cardName.nameCard} name="nameCard" type="text" onChange={handleChange} />
                    <input type="submit" value="Salvar" />
                </form>
            )
        } else {
            card = (
                <div>
                    <span>{name}</span>
                    <img src={image} />
                    <button onClick={removerCard}>X</button>
                    <button onClick={alterarCard}>Editar</button>
                </div>
            )
        }
        return card;
    }

    return alterar();
}

export default PokemonCard;