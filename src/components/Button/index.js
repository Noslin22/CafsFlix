import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

`;

export const ButtonDelete = styled(Link)`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 16px 16px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
display: inline-block;
transition: opacity .3s;
text-decoration: none;
margin: 10px;

&:hover,
&:focus {
opacity: .5;
}
`;

const Button = styled(Link)`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    display: inline-block;
    transition: opacity .3s;
    text-decoration: none;
    
    &:hover,
    &:focus {
    opacity: .5;
    }
`;

export default Button;
