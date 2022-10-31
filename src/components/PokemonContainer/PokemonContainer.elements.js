import styled from 'styled-components';

export const SearchIcon = styled.img`
    position: absolute;
    right: 15px;
    top: 4px;
`;

export const ContainerPoke = styled.div`
`;

export const Heading = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 25px auto;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        padding: 14px;
    }
`;

export const TitleHeading = styled.h2`
    color: #5F1478;
    margin: 0;
`;

export const PokeContainer = styled.div`
    display: grid;
    grid: '1fr 1fr 1fr 1fr';
    grid-gap: 20px;
    max-width: 1100px;
    margin: 25px auto;
    @media (max-width: 768px) {
        grid: '1fr';
        padding: 14px;
    }
`;

export const ShowMoreButton = styled.button`
    background: #E76316 0% 0% no-repeat padding-box;
    border: none;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    color: #FFF;
    padding: 10px 20px;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    margin: 15px;
`;