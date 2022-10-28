import { useState } from "react";

function AddPokemon() {
    const [add, setAdd] = useState([{isAdd: false}]);

    const adding = () => {
        setAdd({isAdd: true})
    }

    const alterar = () => {
        let card;
        if(add.isAdd) {
            card = (
                <form>
                    
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