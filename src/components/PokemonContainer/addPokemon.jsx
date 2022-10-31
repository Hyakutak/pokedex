import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { AddPokemonButton, 
        TitleCriar,
        Title,
        ImageCriar,
        FormCriar,
        FieldForm,
        SubimitForm,
        LabelForm,
        InputForm} from "./addPokemon.elements";
import { useState } from "react";

export default function AddPokemon({ addCard }) {
    const [state, setState] = React.useState({
        right: false
    });

    const [newCard, setNewCard] = useState({id: '', name: '', sprites: {front_shiny: ''}});

    const handleChange = (evt) => {
        evt.preventDefault();
        const obj = {...newCard, [evt.target.name]: evt.target.value.toLowerCase()};
        setNewCard(obj);
    }

    const handleChangeId = (evt) => {
        evt.preventDefault();
        const obj = {...newCard, [evt.target.name]: evt.target.value};
        setNewCard(obj);
    }

    const handleChangeImg = (evt) => {
        evt.preventDefault();
        const image = document.querySelector('#image-poke');
        if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
            return;
        }
    
        var r = new FileReader();
        
        r.onload = function() {
            image.src = r.result;
            const obj = {...newCard, sprites: {[evt.target.name]: r.result}};
            setNewCard(obj);
        }
        
        r.readAsDataURL(evt.target.files[0]);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addCard(newCard);
        setState({right: false});
        setNewCard({id: '', name: '', sprites: {front_shiny: ''}});
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
    >
        <List>
            <TitleCriar>
                <ImageCriar 
                    component="img"
                    src="/assets/icons/icone_criar.svg"
                    id="image-poke" />
                <Title>Criar card</Title>
            </TitleCriar>
            <FormCriar onSubmit={handleSubmit}>
                <Divider />
                <FieldForm>
                    <LabelForm>DIGITE UM NOME PARA O CARD</LabelForm>
                    <InputForm type="text" placeholder="Nome Pokemon" name="name" onChange={handleChange} value={newCard.name} id="name" />
                </FieldForm>
                <FieldForm>
                    <LabelForm>DIGITE UM Numero PARA O CARD</LabelForm>
                    <InputForm type="number" placeholder="Numero da Pokedex" name="id" onChange={handleChangeId} value={newCard.id} id="id" />
                </FieldForm>
                <FieldForm>
                    <LabelForm>INCLUA UMA IMAGEM PARA APARECER NO CARD</LabelForm>
                    <InputForm type="file" placeholder="Imagem" name="front_shiny" accept="image/png, image/jpeg" onChange={handleChangeImg} id="front_shiny" />
                </FieldForm>
                <Divider />
                <FieldForm>
                    <SubimitForm type="submit" value="Criar card" />
                </FieldForm>
            </FormCriar>
        </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <AddPokemonButton onClick={toggleDrawer(anchor, true)}>Novo Card</AddPokemonButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}