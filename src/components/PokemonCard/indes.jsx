import ContainerPokemon from "../PokemonContainer";

function PokemonCard({ name, image, id, remover } ) {
    
    const removerCard = () => {
        remover(id);
    }

    return (
        <div>
            <span>{name}</span>
            <img src={image} />
            <button onClick={removerCard}>X</button>
        </div>
    );
}

export default PokemonCard;