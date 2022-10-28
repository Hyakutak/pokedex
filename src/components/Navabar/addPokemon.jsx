import { useState } from "react";

function AddPokemon({ addTeste }) {
    const [add, setAdd] = useState([{isAdd: false}]);
    const [newCard, setNewCard] = useState({id: '', name: '', sprites: {front_shiny: ''}});

    const adding = () => {
        setAdd({isAdd: true})
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        const obj = {...newCard, [evt.target.name]: evt.target.value};
        setNewCard(obj);
    }

    const handleChangeId = (evt) => {
        evt.preventDefault();
        const obj = {...newCard, [evt.target.name]: evt.target.value};
        setNewCard(obj);
    }

    const handleChangeImg = (evt) => {
        evt.preventDefault();
        var fileReader = new FileReader();
        
        const obj = {...newCard, sprites: {[evt.target.name]: evt.target.value}};
        setNewCard(obj);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTeste(newCard);
    }

    const alterar = () => {
        let card;
        if(add.isAdd) {
            card = (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome Pokemon" name="name" onChange={handleChange} value={newCard.name} id="name" />
                    <input type="number" placeholder="Numero da Pokedex" name="id" onChange={handleChangeId} value={newCard.id} id="id" />
                    <input type="file" placeholder="Imagem" name="front_shiny" accept="image/png, image/jpeg" onChange={handleChangeImg} id="front_shiny" />
                    <input type="submit" value="Criar Pokemon" />
                </form>
            )
        } else {
            card = (
                <div>
                    <button onClick={adding}>Adicionar Pokemon</button>
                </div>
            )
        }
        return card;
    }

    return alterar();
}

export default AddPokemon;