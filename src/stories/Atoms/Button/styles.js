import styled from "styled-components";
import {colors} from '../../tokens'

export const ButtonElement = styled.button` 
    width: ${props => props.size == 'small' && '101px'};
    height: ${props => props.size == 'small' && '18px'};
    width: ${props => props.size == 'medium' && '106px'};
    height: ${props => props.size == 'medium' && '40px'};
    width: ${props => props.size == 'large' && '106px'};
    height: ${props => props.size == 'large' && '48px'};
    background-color: ${props => props.backgroundColor2 == 'primary' && colors.primary.normal};
    background-color: ${props => props.backgroundColor2 == 'secondary' && '#00CCA7'};
    background-color: ${props => props.backgroundColor2 == 'tertiaty' && '#C3C7CE'};

    border-radius: 6px;
    font-weight: 600;
    color: ${colors.black};
    border: none;
`