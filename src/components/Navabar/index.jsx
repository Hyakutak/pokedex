import AddPokemon from "./addPokemon";

function Navbar({ filter, addCard }) {
    return (
        <div>
            <form>
                <input type="text" onChange={(evt) => filter(evt.target.value)}/>
            </form>
            <AddPokemon addTeste={addCard} />
        </div>
    );
}

export default Navbar;