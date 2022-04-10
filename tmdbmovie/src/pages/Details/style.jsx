import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem 0;
    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    img{
        max-width: 300px;
        border-radius: 0.575rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 50%
    }

    button {
        background: #6654da;
        border: none;
        border-radius: 0.475rem;
        color: #fff;
        padding: 0.8rem 2rem;
        cursor: pointer;
        margin-top: 1rem;
    }

    button:hover {
        opacity: 0.7;
        transition: 0.4s;
    }

    p{
        line-height: 130%;
        margin-bottom: 1rem;
    }

    .release_date{
        color: grey;
    }


`