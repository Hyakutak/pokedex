import { useEffect, useState  } from 'react';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Card,
        CardMedia,
        CardContent,
        Typography,
        CardActions,
        ButtonAction,
        ImageButton,
        ButtonActionEdit,
        CardModal,
        CardMediaModal,
        CardImagem,
        TypographyTitleModal,
        TypographyModalText,
        ButtonModal,
        ButtonActionModal,
        ButtonActionEditModal,
        FormCard,
        LabelCardForm,
        InputCardForm,
        InputCardFormSubmit} from './PokemonCard.elements';

function PokemonCard({ name, image, id, remover, atualizar } ) {
    const [cardPokemon, setcardPokemon] = useState({edit: false});
    const [cardName, setCardName] = useState(name);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const removerCard = () => {
        remover(id);
    }

    const alterarCard = () => {
        setcardPokemon({edit: true})
    }
    
    const atualizaCard = (evt) => {
        evt.preventDefault();
        atualizar(id, cardName);
        setcardPokemon({edit: false});
    }

    const handleChange = (evt) => {
        setCardName(evt.target.value)
    }

    const alterar = () => {
        let card;
        if(cardPokemon.edit) {
            card = (
                <FormCard onSubmit={atualizaCard}>
                    <LabelCardForm>Editar Nome do Pokemon</LabelCardForm>
                    <InputCardForm value={cardName.nameCard} name="nameCard" type="text" onChange={handleChange} />
                    <InputCardFormSubmit type="submit" value="Salvar" />
                </FormCard>
            )
        } else {
            card = (
                <Card>
                    <CardMedia
                        component="img"
                        src={image}
                    />
                    <CardContent>
                        <Typography>
                            {name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonAction onClick={handleOpen}>
                            <ImageButton 
                                component="img"
                                src="/assets/icons/Icon-trash.svg" />
                            Excluir
                        </ButtonAction>
                        <ButtonActionEdit onClick={alterarCard}>
                            <ImageButton 
                                component="img"
                                src="/assets/icons/Icon-edit.svg" />
                            Editar
                        </ButtonActionEdit>
                    </CardActions>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                            <CardModal>
                                <CardImagem>
                                    <CardMediaModal
                                        component="img"
                                        src="/assets/icons/Icon-trash.svg"
                                    />
                                </CardImagem>
                                <TypographyTitleModal >
                                    Excluir
                                </TypographyTitleModal>
                                <TypographyModalText>
                                    CERTEZA QUE DESEJA EXCLUIR?
                                </TypographyModalText>
                                <ButtonModal>
                                    <ButtonActionModal onClick={removerCard}>
                                        Excluir
                                    </ButtonActionModal>
                                    <ButtonActionEditModal onClick={handleClose}>
                                        Cancelar
                                    </ButtonActionEditModal>
                                </ButtonModal>
                            </CardModal>
                    </Modal>
                </Card>
            )
        }
        return card;
    }

    return alterar();
}

export default PokemonCard;