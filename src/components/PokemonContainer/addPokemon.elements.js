import styled from 'styled-components';

export const AddPokemonButton = styled.button`
    background: #E76316 0% 0% no-repeat padding-box;
    border: none;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #FFF;
    padding: 10px 20px;
`;

export const TitleCriar = styled.div`
    display: flex;
    padding: 0.5rem 2rem;
    align-items: center;
`;

export const Title = styled.h3`
    font: normal normal bold Muli;
    letter-spacing: 0px;
    color: #5F1478;
    opacity: 1;
`;

export const ImageCriar = styled.img``;

export const FormCriar = styled.form`
    padding: 0 2rem;
`;

export const FieldForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    justify-content: right;
`;

export const SubimitForm = styled.input`
    background: #E76316 0% 0% no-repeat padding-box;
    border: none;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #FFF;
    padding: 10px 30px;
    margin-top: 15px;
`;

export const LabelForm = styled.label`
    width: 100%;
    color: #454545;
    text-transform: uppercase;
    font: normal normal bold 14px/18px Muli;
    margin-top: 20px;
`;

export const InputForm = styled.input`
    width: 100%;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    padding: 12px 16px;
    position: relative;
    &::-webkit-input-placeholder {
        color: #757575;
        font-weight: 400;
    }
    &::-webkit-file-upload-button {
        border: 1px solid #92207242;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #E763162E;
        border: 1px solid #E76316;
        border-radius: 8px;
        padding: 5px 20px;
        position: absolute;
        right: 15px;
        top: 6px;
    }
`;