import styled from 'styled-components';
import Button from '../Button';


export const LogoImage = styled.img`
    max-width: 200px;

    @media (max-width: 800px){
        max-width: 145px;
    }

`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    position: fixed;
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media(max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;
export const ButtonLink = styled(Button)`
    border: 1px solid var(--white);
    border-radius: 5px;
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5
    }

    @media(max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius:0;
        bottom:0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        right: 0;
        text-align: center;
    }

`;