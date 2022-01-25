import styled from "styled-components";
import { darken, transparentize } from 'polished';



export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem; 
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid var(--border-input);
        background: var(--background-input);

        font-weight:400;
        font-size: 1rem;

        outline: none;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin:1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxprops {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxprops>`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 4rem;
    border: 1px solid var(--border-input);
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor]) 
        : 'transparent'
    };

    transition: border-color 0.3s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
        height: 1.5rem;
    }

    span{
        display: inline-block;
        margin: 0 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: var(--text-title);
    }
`;