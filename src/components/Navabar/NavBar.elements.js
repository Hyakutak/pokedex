import styled from 'styled-components';

export const Search = styled.div`
    position: relative;
    marginLeft: 0;
    width: 100%;
    display: flex;
    padding: 4em 3em 2em;
    background-image: url("/assets/background/fundo-busca.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
`
  
export const SearchIconWrapper = styled.div`
    height: 2.5em;
    position: relative;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
  
export const StyledInputBase = styled.input`
    color: #757575;
    background: white;
    width: 100%;
    border-radius: 8px;
    padding: 15px 20px;
    border: none;
    font-size: 1.3rem;
    max-width: 1100px;
    margin: 0 auto;
    &::-webkit-input-placeholder {
        color: #757575;
    }
    &:hover::-webkit-input-placeholder {
        color: #000;
    }
    &:focus-visible {
        outline: none;
    }
`;

export const TopBar = styled.div`
    background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;
    & .css-hip9hq-MuiPaper-root-MuiAppBar-root {
        background-color: transparent;
    }
`;

export const SearchIcon = styled.img`
    position: absolute;
    right: 360px;
    top: 4px;
    @media (max-width: 1000px) {
        right: 30px;
    }
    @media (max-width: 768px) {
        right: 10px;
    }
`;
