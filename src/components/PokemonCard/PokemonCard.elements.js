import styled from 'styled-components';

export const Card = styled.div`
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
`;

export const FormCard = styled.form`
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    max-width: 230px;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const CardMedia = styled.img`
    width: 50%;
    background: #F6F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #E4E4E4;
    border-radius: 100%;
`;

export const CardContent = styled.div`
    width: 100%;
`;

export const Typography = styled.h2`
    text-align: center;
    color: #263238;
`;

export const CardActions = styled.div`
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
    padding-top: 10px;
`;

export const ButtonAction = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    text-align: center;
    color: #757575;
    border: none;
    background: transparent;
    &:hover {
        color: #DB2525;
    }
`;

export const ButtonActionEdit = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    text-align: center;
    color: #757575;
    border: none;
    background: transparent;
    &:hover {
        color: #E76316;
    }
`;

export const ImageButton = styled.img`
`;

export const CardModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFF;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 24px 14px;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const CardImagem = styled.div`
    background: #DB25250F 0% 0% no-repeat padding-box;
    border: 6px solid #E4E4E4;
    width: 100px;
    height: 100px;
    padding: 14px;
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
`;

export const CardMediaModal = styled.img`
    width: 50%;
`;

export const TypographyTitleModal = styled.h3`
    width: 100%;
    text-align: center;
    color: #DB2525;
    font-size: 30px;
    margin: 25px 0 1px 0;
`;

export const TypographyModalText = styled.h4`
    color: #454545;
    text-transform: uppercase;
    margin: 5px 0 25px 0;
`;

export const ButtonModal = styled.div`
    width: 100%;
    box-shadow: inset 0px 3px 0px #E4E4E499;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0 0 0;
`;

export const ButtonActionModal = styled.button`
    width: 30%;
    background: #DB2525 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #FFF;
    text-align: center;
    padding: 8px 8px;
    border: none;
    cursor: pointer;
`;

export const ButtonActionEditModal = styled.button`
    width: 30%;
    background: #FFF 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #DB2525;
    text-align: center;
    padding: 8px 8px;
    border: 1px solid #DB2525;
    cursor: pointer;
`;

export const LabelCardForm = styled.label`
    color: #454545;
    text-transform: uppercase;
    margin: 5px 0 25px 0;
`;

export const InputCardForm = styled.input`
    width: 100%;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    padding: 12px 16px;
    position: relative;
    &::-webkit-input-placeholder {
        color: #757575;
        font-weight: 400;
    }
    &:focus-visible {
        outline: none;
    }
`;

export const InputCardFormSubmit = styled.input`
    width: 50%;
    background: #FFF 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #E76316;
    text-align: center;
    padding: 8px 8px;
    border: 1px solid #E76316;
    cursor: pointer;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;
